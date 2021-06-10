import React from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";


const DoctorHome = () => {
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Doctor's Home
                </a>
                <Tabs style= {{width:window.innerWidth-100}} defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Who viewed" title="Who viewed">
                        <p >
                            first</p>
                    </Tab>
                    <Tab eventKey="Requests" title="Requests">
                        <p>second</p>
                    </Tab>
                <Tab eventKey="Permitted" title="Permitted" >
                    <p> third</p>
                </Tab>
                    <Tab eventKey="Reports" title="Reports" >
                        <p> Fourth</p>
                    </Tab>
                </Tabs>

            </header>
        </div>
    );
}

export default DoctorHome;
