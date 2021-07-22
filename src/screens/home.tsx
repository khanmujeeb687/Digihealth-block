import React, {useEffect} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import GradientBanner from "../components/GradientBanner";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";
import {UserService} from "../services/userService";
import LottieComponent from "../components/LottieComponent";
import {Typography} from "@material-ui/core";
import {FaDotCircle} from "react-icons/all";

const Home = (props: any) => {
    useEffect(() => {
        const a = StorageUtil.requestUserData();
        if (a !== null) {
            props.history.push('/' + a.type);
        }


    }, []);

    return (
        <div className="App" >
            <MyNavBar />
            <header className="App-header" style={{marginTop:70}}>
                <p>
                    Welcome to Blockchain Protected Digital Reports system.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    HealthBlock
                </a>
                <Row style={{marginTop: 20}}>
                    <Col><GradientBanner to={'/login/doctor'} title={"Doctor"} subTitle={"See reports, stay updated."}/></Col>
                    <Col><GradientBanner to={'/login/user'} title={"Patient"}
                                         subTitle={"Keep reports safe using blockchain."}/></Col>
                    <Col><GradientBanner to={'/login/pathologist'} title={"Pathologist"}
                                         subTitle={"Upload reports save paper."}/></Col>
                </Row>
                <div style={{marginTop:'50px',marginBottom:'50px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
                        <FaDotCircle/><Typography variant={'h5'}>{'  '}  Manage all your reports at one place</Typography>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
                        <FaDotCircle/><Typography variant={'h5'}>{'  '}  Keep your reports safe and immutable</Typography>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
                        <FaDotCircle/><Typography variant={'h5'}>{'  '}  Keep your reports for geneartions</Typography>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
                        <FaDotCircle/><Typography variant={'h5'}>{'  '}  Help in contributing for a healthy mother nature</Typography>
                        </div>
                    </div>
                <LottieComponent/>
                </div>
            </header>
        </div>
    );
}

export default Home;
