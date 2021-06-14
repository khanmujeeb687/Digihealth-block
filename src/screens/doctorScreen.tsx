import React, {useState} from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {DoctorService} from "../services/doctorService";

const DoctorScreen = (props:any) => {
    const [phone,setPhone]=useState('');
    const submit=async()=>{
        if(phone && phone.length===10){
          const res = await  DoctorService.requestAccess(phone);
           res && props.history.push('/doctor');
        }else{
            window.alert('please enter a valid phone number');
        }
    }
    return (
        <div>
            <MyNavBar
            leftRef={'/doctor/new'}
            leftText={'+Request'}
            buttonText={'Logout'} onClick={()=>{
            StorageUtil.logout();
            props.history.push('/');
            }}/>
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
                        value={phone}
                        onChange={(a)=>setPhone(a.target.value)}
                        placeholder="Patient's no"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup>

                <Button onClick={submit} style={{marginTop: 10}}  variant ="success">Submit</Button>

            </header>
        </div>
        </div>
    );
}

export default DoctorScreen;
