import React from 'react';
import logo from '../../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const DoctorRegisterScreen = () => {
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Registration Details
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <Form>
                    <Form.Group className="mb-3" controlId="formGridEmail">

                        <Form.Control placeholder="@al.com" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">

                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">

                            <Form.Control type="Confirm Password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="License No">

                        <Form.Control placeholder="License No" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">

                            <Form.Control type="Name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">

                            <Form.Control type="Last Name" placeholder="Last Name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridSpecialization">

                        <Form.Control placeholder="ENT,Neuro etc.." />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formGridAddress">

                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">

                            <Form.Control placeholder="Delhi,Mumbai etc" />


                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">

                            <Form.Control placeholder="Punjab ,UP etc" />



                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPin">

                            <Form.Control placeholder="1100.." />


                        </Form.Group>
                    </Row>




                </Form>


                <Button variant="success">Submit</Button>

            </header>
        </div>
    );
}

export default DoctorRegisterScreen;
