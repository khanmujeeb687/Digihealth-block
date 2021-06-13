import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const DoctorScreen = () => {
    return (

        <div className="App">
            <header className="App-header">
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

                <Button style={{marginTop: 10}}  variant ="success">Submit</Button>

            </header>
        </div>
    );
}

export default DoctorScreen;
