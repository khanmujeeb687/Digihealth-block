import React from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";


const UserHome = () => {
    return (

        <div className="App">
            <header className="App-header">

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DigiHealth Blocks
                </a>
                <Tabs style= {{width:window.innerWidth-100}} defaultActiveKey="Who viewed" id="uncontrolled-tab-example">
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

export default UserHome;