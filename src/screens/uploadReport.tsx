import React, {useState} from 'react';
import logo from '../logo.svg';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {PathologistService} from "../services/pathologistService";


const UploadReport = (props:any) => {
    const [key,setKey]=useState('');
    const [userPhone,setUserPhone]=useState('');
    const [file,setFile]=useState(undefined);

    const submit = async() => {
        if(key && userPhone && file){
          StorageUtil.showLoader();
          const response = await  PathologistService.uploadReport({key,file,phone:userPhone});
          StorageUtil.hideLoader();
            if(response){
           props.history.push('/pathologist');
          }
        }else{
            window.alert('Please fill all the fields');
        }
    }


   const captureFile =(event:any)=> {
        event.stopPropagation()
        event.preventDefault()
        event.target.files.length && setFile(event.target.files[0]);
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
                        <Form.Control onChange={captureFile} type="file" size="sm"/>
                    </Form.Group>


                    <InputGroup style={{width: 300, margin: 10}}
                                className="mb-3">
                        <FormControl
                            value={key}
                            onChange={(a)=>setKey(a.target.value)}
                            placeholder="Private Key"
                            aria-label="Amount (to the nearest dollar)"
                        />
                    </InputGroup>
                    <InputGroup style={{width: 300}}
                                className="mb-3">
                        <FormControl
                            value={userPhone}
                            onChange={(a)=>setUserPhone(a.target.value)}
                            placeholder="Patients Phone"
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
