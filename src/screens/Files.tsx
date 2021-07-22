import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {PathologistService} from "../services/pathologistService";
import {DoctorService} from "../services/doctorService";
import RequestList from "../components/requestList";
import UserFiles from "../components/userFiles";


const FilesScreen = (props:any) => {
    const phone=props.match.params.phone;

    return (
        <div>
            <MyNavBar
                buttonText={'Logout'} onClick={()=>{
                StorageUtil.logout();
                props.history.push('/');
            }}/>
            <div className="App">
            <header className="App-header">

                <p className="App-link">
                    User files
                </p>
                <UserFiles phone={phone}/>

            </header>
        </div>
        </div>
    );
}

export default FilesScreen;
