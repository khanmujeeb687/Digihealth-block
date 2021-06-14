import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {UserService} from "../../services/userService";
import MyNavBar from "../../components/navBar";


const UserRegister = (props:any) => {
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [password1,setPassword1]=useState('');


    const submit = async ()=>{
        if(phone && password && (password===password1) && phone.length===10){
           await  UserService.registerUser({phone:phone,password:password});
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
                    Register
                </a>
                <InputGroup style={{width: 300, margin:10}}
                            className="mb-3">
                    <FormControl
                        value={phone}
                        onChange={(a)=>setPhone(a.target.value)}
                        placeholder="Mobile No"
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




                <Button onClick={submit} variant="success">Submit</Button>

            </header>
        </div>
        </div>
    );
}

export default UserRegister;
