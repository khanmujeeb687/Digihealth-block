import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {AuthService} from "../services/authService";
import MyNavBar from "../components/navBar";





const Login = (props:any) => {
    const type=props.match.params.type;
    const [mobileNo,setMobileNo]=useState('');
    const [password,setPassword]=useState('');
    const submit = async ()=>{
        if(mobileNo && password && mobileNo.length===10
        ){
          const response =  await  AuthService.login(mobileNo,password,type);
          if(response){
              props.history.push('/');
          }
          else{
              window.alert('Invalid Authentication');
          }
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
                    {type[0].toUpperCase()+type.substr(1)} Login
                </a>
                <InputGroup style={{width: 300, margin:10}}
                            className="mb-3">
                    <FormControl
                        value={mobileNo}
                        onChange={(a)=>setMobileNo(a.target.value)}
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

                <Button onClick={submit}
                    variant="success">Submit</Button>


                <p style={{marginTop:20}}
                >Do not have an account ?<a
                    className="App-link"
                    onClick={()=>{
                        props.history.push('/'+type+'/register');
                    }}
                > Register</a> </p>
            </header>
        </div>
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

