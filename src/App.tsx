import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./screens/home";
import DoctorScreen from "./screens/doctorScreen";
import Pathologist from "./screens/Pathologist";
import DoctorRegisterScreen from "./screens/doctorRegister/doctorRegisterScreen";
import PathologistRegister from "./screens/doctorRegister/pathologistRegister";
import PathologistHome from "./screens/pathologistHome";
import UploadReport from "./screens/uploadReport";
import Login from "./screens/login";
import DoctorHome from "./screens/doctorHome";
import LottieComponent from "./components/LottieComponent";
import {GenUtil} from "./utils/genUtil";


function App(props:any) {
    return (
        <div style={{padding:10,backgroundColor: '#282c34', flexDirection:'row',display:'flex',minHeight:window.innerHeight,alignItems:'center',justifyContent:'space-evenly'}}>
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
            {GenUtil.isFormRoute(props.location.pathname)?<LottieComponent/>:null}
        </div>
    );
}

export default withRouter(App);


