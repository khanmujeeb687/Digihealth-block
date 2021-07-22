import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {PathologistService} from "../services/pathologistService";
import {DoctorService} from "../services/doctorService";
import RequestList from "../components/requestList";


const DoctorHome = (props:any) => {
    const [request,setRequest]=useState([] as any[]);
    const [reports,setReports]=useState([] as any[]);
    const [history,setHistory]=useState([] as any[]);
    useEffect(()=>{
        fetch();
    },[]);

    const fetch=async()=>{
        const data =await DoctorService.getRequests();
        console.log(data);
        setRequest(data.filter(item=>item.data().status!=='allowed' && item.data().status!=='denied'));
        setReports(data.filter(item=>item.data().status==='allowed'));
        setHistory(data.filter(item=>item.data().status==='denied'));
    };

    return (
        <div>
            <MyNavBar
                leftRef={'/doctor/new'}
                leftText={'+Request'}
                buttonText={'Logout'} onClick={()=>{
                StorageUtil.logout();
                props.history.push('/');
            }}/>
            <div className="App">
            <header className="App-header">

                <p className="App-link">
                    Doctor's Home
                </p>
                <Tabs style= {{width:window.innerWidth-100}} defaultActiveKey="Requests" id="uncontrolled-tab-example">
                    <Tab eventKey="Requests" title="Requests">
                        <RequestList remove={(id)=>{
                            setRequest(request.filter((item)=>item.id!==id));
                        }} requests={request} type={'doctor'}/>
                    </Tab>
                    <Tab eventKey="Reports" title="Reports">
                        <RequestList remove={(id)=>{
                            setReports(request.filter((item)=>item.id!==id));
                        }} requests={reports} type={'doctor'}/>
                    </Tab>
                    <Tab eventKey="history" title="Request History">
                        <RequestList remove={(id)=>{
                        }} requests={history} type={'doctor'}/>
                    </Tab>
                </Tabs>

            </header>
        </div>
        </div>
    );
}

export default DoctorHome;
