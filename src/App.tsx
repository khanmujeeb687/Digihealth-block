import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./screens/home";
import DoctorScreen from "./screens/doctorScreen";
import Pathologist from "./screens/Pathologist";
import DoctorRegisterScreen from "./screens/doctorRegister/doctorRegisterScreen";
import DoctorHome from "./screens/doctorHome";
import PathologistRegister from "./screens/doctorRegister/pathologistRegister";
import PathologistHome from "./screens/pathologistHome";
import UploadReport from "./screens/uploadReport";
import Login from "./screens/login";
import firebase from "firebase";
import {Button} from "react-bootstrap";
const firebaseConfig = {
    apiKey: "AIzaSyAKDp1VR4KlqyYQOYcGSyboURK6xHU38Ek",
    authDomain: "ereport-7fc81.firebaseapp.com",
    projectId: "ereport-7fc81",
    storageBucket: "ereport-7fc81.appspot.com",
    messagingSenderId: "32963531288",
    appId: "1:32963531288:web:0907bb27a6be716f1d696d",
    measurementId: "G-JVSDF7NE7Y"
};

function App() {

    useEffect(()=>{  firebase.initializeApp(firebaseConfig);},[]);

    return (
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pathologist" component={Pathologist} />
                <Route exact path="/doctor" component={DoctorScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/doctor/home" component={DoctorHome} />
                <Route exact path="/pathologist/home" component={PathologistHome} />
                <Route exact path="/pathologist/new" component={UploadReport} />
                <Route path="/doctor/register" component={DoctorRegisterScreen} />
                <Route path="/pathologist/register" component={PathologistRegister} />

            </Switch>
        </div>
    );
}

export default withRouter(App);


