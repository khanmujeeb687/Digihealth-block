import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";


const UploadReport = () => {

    const submit = () => {

    }
    return (
        <div>
            <MyNavBar buttonText={'Logout'} onClick={() => {
                StorageUtil.logout();
                props.history.push('/');
            }}/>
            <div className="App">
                <header className="App-header">
                    <p
                        className="App-link"

                    >
                        Upload report
                    </p>


                    <Form.Group style={{width: 300, marginTop: 10, cursor: 'pointer'}}
                                controlId="formFileLg" className="mb-3">
                        <Form.Control type="file" size="sm"/>
                    </Form.Group>


                    <InputGroup style={{width: 300, margin: 10}}
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
                    <Button onClick={submit}
                            variant="success">Upload</Button>


                </header>
            </div>
        </div>
    );
}

export default UploadReport;
