import React, {useState} from 'react';
import logo from '../../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {DoctorService} from "../../services/doctorService";
import {PathologistService} from "../../services/pathologistService";
import MyNavBar from "../../components/navBar";

const PathologistRegister = (props:any) => {
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [password1,setPassword1]=useState('');
    const [name,setName]=useState('');
    const [licenseNo,setLicenseNo]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [type,setType]=useState('');




    const submit = async ()=>{
        if(phone && password && (password===password1) && phone.length===10 &&
             licenseNo && type && email && name
            && address
        ){
            await  PathologistService.registerPathologist({phone,password,name,email,
                licenseNo,address,type
            });
            props.history.push('/login');
        }else{
            window.alert('Invalid details');
        }
    }

    return (
        <div>
            <MyNavBar/>
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
                        value={name}
                        onChange={(a)=>setName(a.target.value)}
                        placeholder="Name"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        value={email}
                        onChange={(a)=>setEmail(a.target.value)}
                        placeholder="Email"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        value={phone}
                        onChange={(a)=>setPhone(a.target.value)}
                        placeholder="Contact No"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        value={licenseNo}
                        onChange={(a)=>setLicenseNo(a.target.value)}
                        placeholder="License no"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>
                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        value={password}
                        onChange={(a)=>setPassword(a.target.value)}
                        placeholder="Password"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>

                <InputGroup style={{width: 300 , margin:10}}
                            className="mb-3">
                    <FormControl
                        value={password1}
                        onChange={(a)=>setPassword1(a.target.value)}
                        placeholder="Confirm Password"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>

                <InputGroup style={{width: 300}}
                            className="mb-3">
                    <FormControl style={{width:50}}
                                 value={type}
                                 onChange={(a)=>setType(a.target.value)}
                                 placeholder="Specify your type"
                                 aria-label="Recipient's username"
                                 aria-describedby="basic-addon2"
                    />



                </InputGroup>
                <InputGroup style={{width: 300}}
                            className="mb-3">
                    <FormControl style={{width:50}}
                                 value={address}
                                 onChange={(a)=>setAddress(a.target.value)}
                                 placeholder="Address(houseNo,street,pin)"
                                 aria-label="Recipient's username"
                                 aria-describedby="basic-addon2"
                    />


                    <InputGroup.Text id="basic-addon2">India</InputGroup.Text>
                </InputGroup>





                <Button onClick={submit}
                    variant="success">Submit</Button>

            </header>
        </div>
        </div>
    );
}

export default PathologistRegister;
