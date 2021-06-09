import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";

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
                <InputGroup style={{width: 500 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Patient's no"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 500}}
                    className="mb-3">
                    <FormControl style={{width:250}}
                                     placeholder="Enter Duration"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Days</InputGroup.Text>
                </InputGroup>

                <InputGroup style ={{width: 115 }}
                    className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <FormControl
                        placeholder = "forever"
                        aria-label="Text input with checkbox" />
                </InputGroup>


                <Button variant="success">Submit</Button>

            </header>
        </div>
    );
}

export default DoctorHome;
