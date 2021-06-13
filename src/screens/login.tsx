import React from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const Login = (props:any) => {
    const type=props.match.params.type;
    return (

        <div className="App">
            <header className="App-header">

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {type} Login
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


//validate the form
//call a function in authService and pass the object with type,phone and password
//inside that function check the type
//if type is pathologist then fetch the document from pathologist collection and and verify it
//if type is doctor then fetch the document from doctor collection and and verify it
//if type is user then fetch the document from user collection and and verify it

