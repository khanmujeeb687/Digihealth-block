import React, {useEffect} from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";


const DoctorHome = (props:any) => {
    return (
        <div className="App">
            <header className="App-header">

                <p onClick={()=>{
                    StorageUtil.logout();
                    props.history.push('/');
                }}
                    className="App-link"


                >
                    Doctor's Home
                </p>
                <Tabs style= {{width:window.innerWidth-100}} defaultActiveKey="Reports" id="uncontrolled-tab-example">
                    <Tab eventKey="Reports" title="Reports">
                        <p >
                            first</p>
                    </Tab>
                    <Tab eventKey="Requests" title="Requests">
                        <p>second</p>
                    </Tab>
                </Tabs>

            </header>
        </div>
    );
}

export default DoctorHome;
