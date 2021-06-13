import React, {useState} from 'react';
import logo from '../../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {UserService} from "../../services/userService";
import {DoctorService} from "../../services/doctorService";




const DoctorRegisterScreen = (props:any) => {
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [password1,setPassword1]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [licenseNo,setLicenseNo]=useState('');
    const [specialization,setSpecialization]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [pin,setPin]=useState('');




    const submit = async ()=>{
        if(phone && password && (password===password1) && phone.length===10 &&
        firstname && lastname && licenseNo && specialization && email
            && address && city && state &&  pin
        ){
            await  DoctorService.registerDoctor({phone,password,firstname,lastname,email,
            specialization,licenseNo,address,city,state,pin
            });
            props.history.push('/');
        }else{
            window.alert('Invalid details');
        }
    }
    return (

        <div className="App">
            <header className="App-header">
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

                        <Form.Control
                            value={email}
                            onChange={(a)=>setEmail(a.target.value)}
                            placeholder="@al.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridContactNo.">

                        <Form.Control
                            value={phone}
                            onChange={(a)=>setPhone(a.target.value)}
                            placeholder="9999" />
                    </Form.Group>



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">

                            <Form.Control
                                value={password}
                                onChange={(a)=>setPassword(a.target.value)}
                                type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">

                            <Form.Control
                                value={password1}
                                onChange={(a)=>setPassword1(a.target.value)}
                                type="Confirm Password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="License No">

                        <Form.Control
                            value={licenseNo}
                            onChange={(a)=>setLicenseNo(a.target.value)}
                            placeholder="License No" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">

                            <Form.Control
                                value={firstname}
                                onChange={(a)=>setFirstName(a.target.value)}
                                type="Name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">

                            <Form.Control
                                value={lastname}
                                onChange={(a)=>setLastName(a.target.value)}
                                type="Last Name" placeholder="Last Name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridSpecialization">

                        <Form.Control
                            value={specialization}
                            onChange={(a)=>setSpecialization(a.target.value)}
                            placeholder="ENT,Neuro etc.." />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formGridAddress">

                        <Form.Control

                            value={address}
                            onChange={(a)=>setAddress(a.target.value)}
                            placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">

                            <Form.Control
                                value={city}
                                onChange={(a)=>setCity(a.target.value)}
                                placeholder="Delhi,Mumbai etc" />


                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">

                            <Form.Control
                                value={state}
                                onChange={(a)=>setState(a.target.value)}
                                placeholder="Punjab ,UP etc" />



                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPin">

                            <Form.Control
                                value={pin}
                                onChange={(a)=>setPin(a.target.value)}
                                placeholder="1100.." />


                        </Form.Group>
                    </Row>




                </Form>


                <Button onClick={submit}
                    variant="success">Submit</Button>

            </header>
        </div>
    );
}

export default DoctorRegisterScreen;
