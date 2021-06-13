import React from 'react';
import {Button} from "react-bootstrap";
import logo from '../logo.svg';

const Pathologist = () => {
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Uplaod a new Report
                </a>
                <Button variant="primary">+ Upload</Button>
            </header>
        </div>
    );
}

export default Pathologist;
