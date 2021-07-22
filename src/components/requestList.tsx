import React from 'react';
import { FaUniversalAccess} from "react-icons/all";
import {Button} from "react-bootstrap";
import {DoctorService} from "../services/doctorService";
import {makeStyles, TextField} from "@material-ui/core";
import HashVerifier from "./HashVerifier";
import {UserService} from "../services/userService";
import Accepted from "./Accepted";
import {StorageUtil} from "../utils/storageUtil";




const RequestList=({requests,type,remove}:{requests:any[],type:string,remove?:(id:string)=>void;})=>{

    const cancel= async(id:string)=>{
        await DoctorService.deleteRequest(id);
        remove && remove(id);
    }

    const onHashVerification=(requestId:string,docId:string,value:boolean)=>{
        if(value){
            UserService.updateStatus(requestId,StorageUtil.requestUserData()?.id,docId);
        }else{
            alert('Invalid hash');
        }

    }



    return (
      <div style={{minWidth:window.innerWidth*.8}}>
          {requests.map((item:any)=>{
              return(
                  <div style={{
                      borderRadius:20,
                      padding:15,
                      margin:6,
                      backgroundColor:'#434242'
                  }}>
                      <div
                      style={{
                          display:'flex',
                          flexDirection:'row',
                          alignItems:'center',
                          justifyContent:'space-between'
                      }}
                      >
                          <div
                              style={{
                                  display:'flex',
                                  flexDirection:'row',
                                  alignItems:'center',
                              }}
                          >
                      <FaUniversalAccess size={30} color={'white'} />
                      <div   style={{
                          marginLeft:20,
                          display:'flex',
                          flexDirection:'column',
                          alignItems:'flex-start',
                          justifyContent:'flex-start'
                      }}>
                      <h3>{type!=='doctor'?item.data().doctor_name:item.data().user_phone}</h3>
                      <h5 style={{color:'grey'}}>Requested on 24 May 2021</h5>
                      {(item.data().status==='requested' && <h6 style={{color:'green'}}>Requested</h6>)}
                      </div>
                          </div>
                          <div>
                              {( type==='user' &&item.data()?.status==='requested' && <HashVerifier type={type} onSubmit={(value)=>{
                                  onHashVerification(item.id,item.data().doctor_id,value);
                              }}/>)}
                              {(item.data()?.status==='allowed' && <Accepted/>)}
                             {(type==='doctor' && item.data()?.status!=='allowed' && <Button onClick={()=>cancel(item.id)} variant={'danger'}>Delete</Button>)}
                          </div>
                      </div>
                  </div>
              )
          })}
      </div>
    );
}


export default RequestList;
