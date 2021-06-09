import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./screens/home";
import DoctorScreen from "./screens/doctorScreen";
import Pathologist from "./screens/Pathologist";
import DoctorRegisterScreen from "./screens/doctorRegister/doctorRegisterScreen";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/doctor" component={DoctorScreen} />
                <Route path="/pathologist" component={Pathologist} />
                <Route path="/doctor/register" component={DoctorRegisterScreen} />
            </Switch>
        </div>
    );
}

export default withRouter(App);


