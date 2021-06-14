import React from 'react';
import { FaUniversalAccess} from "react-icons/all";
import {Button} from "react-bootstrap";
import {DoctorService} from "../services/doctorService";

const RequestList=({requests,type,remove}:{requests:any[],type:string,remove?:(id:string)=>void;})=>{
    const cancel= async(id:string)=>{
        await DoctorService.deleteRequest(id);
        remove && remove(id);
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
                      <h6 style={{color:'green'}}>Requested</h6>
                      </div>
                          </div>
                          <div>
                              <Button onClick={()=>cancel(item.id)} variant={'danger'}>Delete</Button>
                          </div>
                      </div>
                  </div>
              )
          })}
      </div>
    );
}


export default RequestList;
