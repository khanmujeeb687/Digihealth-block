import React, {useEffect} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import GradientBanner from "../components/GradientBanner";
import MyNavBar from "../components/navBar";
import {StorageUtil} from "../utils/storageUtil";

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
            </header>
        </div>
    );
}

export default Home;
