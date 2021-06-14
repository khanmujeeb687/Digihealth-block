import React from 'react';
import { FaFile} from "react-icons/all";

const ReportsList=({reports}:{reports:any[]})=>{
    return (
      <div>
          {reports.map((item:any)=>{
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
                          alignItems:'center'
                      }}
                      >
                      <FaFile size={30} color={'white'} />
                      <div   style={{
                          marginLeft:20,
                          display:'flex',
                          flexDirection:'column',
                          alignItems:'flex-start',
                          justifyContent:'flex-start'
                      }}>
                      <h3>{item.data().user_phone}</h3>
                      <h5 style={{color:'grey'}}>Uploaded on 24 May 2021</h5>
                      </div>
                      </div>
                  </div>
              )
          })}
      </div>
    );
}


export default ReportsList;
