import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./screens/home";
import Pathologist from "./screens/Pathologist";
import DoctorRegisterScreen from "./screens/doctorRegister/doctorRegisterScreen";
import PathologistRegister from "./screens/doctorRegister/pathologistRegister";
import PathologistHome from "./screens/pathologistHome";
import UploadReport from "./screens/uploadReport";
import Login from "./screens/login";
import firebase from "firebase";
import DoctorHome from "./screens/doctorHome";
import UserHome from "./screens/userHome";
import UserRegister from "./screens/doctorRegister/userRegister";
import DoctorScreen from "./screens/doctorScreen";
import FullScreenLoader from "./components/fullScreenLoader";
import {UserService} from "./services/userService";
import FilesScreen from "./screens/Files";
import Footer from "./components/footer";

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};



function App(props:any) {

    const [loaded,setLoaded]=useState(false);

    useEffect(()=>{
        (async()=>{
           await  firebase.initializeApp(firebaseConfig);
           UserService.fetchAndSaveUser();
            setLoaded(true);
        })();
        },[]);
    return (
        <div>
            <FullScreenLoader show={!loaded}/>
            {/*<div style={{padding:10,backgroundColor: '#282c34', flexDirection:'row',display:'flex',minHeight:window.innerHeight,alignItems:'center',justifyContent:'space-evenly'}}>*/}
            {loaded?<div style={{minHeight:window.innerHeight,backgroundColor: '#282c34'}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pathologist" component={PathologistHome} />
                <Route exact path="/doctor" component={DoctorHome} />
                <Route exact path="/user" component={UserHome} />
                <Route exact path="/login/:type" component={Login} />
                <Route exact path="/files/:phone" component={FilesScreen} />
                <Route exact path="/doctor/new" component={DoctorScreen} />
                <Route exact path="/user/register" component={UserRegister} />
                <Route exact path="/doctor/home" component={DoctorHome} />
                <Route exact path="/pathologist/home" component={Pathologist} />
                <Route exact path="/pathologist/new" component={UploadReport} />
                <Route path="/doctor/register" component={DoctorRegisterScreen} />
                <Route path="/pathologist/register" component={PathologistRegister} />
            </Switch>
            {/*{GenUtil.isFormRoute(props.location.pathname)?<LottieComponent/>:null}*/}
        </div>:null}
            <Footer/>
        </div>
    );
}

export default withRouter(App);


