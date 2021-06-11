import React from 'react';
import logo from '../../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const PathologistRegister = () => {
    return (

        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pathologist Registration
                </a>
                <InputGroup style={{width: 300, margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Name"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Email"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="License no"
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

                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Confirm Password"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Contact no"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>

                <InputGroup style={{width: 300}}
                            className="mb-3">
                    <FormControl style={{width:50}}
                                 placeholder="Specify your type"
                                 aria-label="Recipient's username"
                                 aria-describedby="basic-addon2"
                    />



                </InputGroup>
                <InputGroup style={{width: 300}}
                            className="mb-3">
                    <FormControl style={{width:50}}
                                 placeholder="Address(houseNo,street,pin)"
                                 aria-label="Recipient's username"
                                 aria-describedby="basic-addon2"
                    />


                    <InputGroup.Text id="basic-addon2">India</InputGroup.Text>
                </InputGroup>





                <Button variant="success">Submit</Button>

            </header>
        </div>
    );
}

export default PathologistRegister;
