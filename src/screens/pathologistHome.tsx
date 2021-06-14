import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import {Tabs, Tab, Button} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import ReportsList from "../components/reportsList";
import {PathologistService} from "../services/pathologistService";


const PathologistHome = (props:any) => {
    const [report,setReports]=useState([] as any[]);
    useEffect(()=>{
        fetch();
    },[]);

    const fetch=async()=>{
      const data =await PathologistService.getReports();
      console.log(data);
      setReports(data);
    };
    return (
        <div>
            <MyNavBar buttonText={'Logout'} onClick={()=>{
                StorageUtil.logout();
                props.history.push('/');
            }}/>
        <div className="App">
            <header className="App-header">

                <p
                    className="App-link"
                >
                    Uplaod a new Report
                </p>
                <Button onClick={()=>{
                    props.history.push('/pathologist/new');
                }} variant="primary">+ Upload</Button>

            </header>
            <h2 style={{color:'white'}}>Reports</h2>
            <div style={{padding:50}}>
                <ReportsList reports={report}/>
            </div>
        </div>

        </div>
    );
}

export default PathologistHome;
