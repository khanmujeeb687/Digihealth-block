import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";



const UploadReport = () => {
    return (

        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Upload report
                </a>


                <Form.Group style={ {width:300,marginTop:10,cursor:'pointer'}}
                    controlId="formFileLg" className="mb-3">
                    <Form.Control type="file" size="sm" />
                </Form.Group>



                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        placeholder="Private Key"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300}}
                            className="mb-3">
                    <FormControl
                        placeholder="User Id"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>




            </header>
        </div>
    );
}

export default UploadReport;
