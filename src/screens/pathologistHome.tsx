import React from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";


const PathologistHome = () => {
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


            </header>
        </div>
    );
}

export default PathologistHome;
