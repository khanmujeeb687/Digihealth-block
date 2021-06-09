import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./screens/home";
import DoctorScreen from "./screens/doctorScreen";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/doctor" component={DoctorScreen} />
            </Switch>
        </div>
    );
}

export default withRouter(App);


