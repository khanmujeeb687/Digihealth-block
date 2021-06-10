import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const Login = () => {
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
             Login
                </a>
                <InputGroup style={{width: 300, margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Mobile No"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Password"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                



                <Button variant="success">Submit</Button>

            </header>
        </div>
    );
}

export default Login;
