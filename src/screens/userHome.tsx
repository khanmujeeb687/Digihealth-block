import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import {Tabs,Tab} from "react-bootstrap";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {UserService} from "../services/userService";
import RequestList from "../components/requestList";
import PermittedDoctors from "../components/permittedDoctors";


const UserHome = (props:any) => {
    const [requests,setRequests] = useState<any[]>([]);
    const [permitted,setPermitted] = useState<any[]>([]);

    const fetch= async()=>{
        const requests = await UserService.request(StorageUtil.requestUserData()?.phone);
        const permitted = await UserService.permitted(StorageUtil.requestUserData()?.permitted);
        setRequests(requests.filter(item=>item.data().status!=='allowed'));
        setPermitted(permitted);
    }

    useEffect(()=>{
        fetch();
    },[]);


    return (
        <div>
            <MyNavBar
                leftRef={''}
                leftText={''}
                buttonText={'Logout'} onClick={()=>{
                StorageUtil.logout();
                props.history.push('/');
            }}/>
        <div className="App">
            <header className="App-header">

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DigiHealth Blocks
                </a>
                <Tabs style= {{width:window.innerWidth-100}} defaultActiveKey="Who viewed" id="uncontrolled-tab-example">
                    <Tab eventKey="Who viewed" title="Who viewed">
                        <p >
                            first</p>
                    </Tab>
                    <Tab eventKey="Requests" title="Requests">
                        <RequestList requests={requests} type={'user'}/>
                    </Tab>
                <Tab eventKey="Permitted" title="Permitted" >
                    <PermittedDoctors remove={(id)=>{
                        setPermitted(permitted.filter(item=>item.id!==id));
                    }} doctors={permitted}/>
                </Tab>
                    <Tab eventKey="Reports" title="Reports" >
                        <p> Fourth</p>
                    </Tab>
                </Tabs>

            </header>
        </div>
        </div>
    );
}

export default UserHome;
