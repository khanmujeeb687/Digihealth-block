import React from 'react';
import logo from '../logo.svg';
import {Tabs, Tab, Button} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";


const PathologistHome = (props:any) => {
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
        </div>
        </div>
    );
}

export default PathologistHome;
