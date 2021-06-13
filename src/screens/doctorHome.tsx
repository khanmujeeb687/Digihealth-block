import React, {useEffect} from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";
import MyNavBar from "../components/navBar";


const DoctorHome = () => {
    return (
        <div className="App">
            <header className="App-header">

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Doctor's Home
                </a>
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
