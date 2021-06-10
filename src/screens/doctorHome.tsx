import React from 'react';
import logo from '../logo.svg';


const DoctorHome = () => {
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                   Request Access to digital report.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Search for report
                </a>
            </header>
        </div>
    );
}

export default DoctorHome;
