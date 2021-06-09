import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import logo from '../logo.svg';
import GradientBanner from "../components/GradientBanner";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Row style={{marginTop:20}}>
                    <Col><GradientBanner/></Col>
                    <Col><GradientBanner/></Col>
                    <Col><GradientBanner/></Col>
                </Row>

                <Button variant="primary">Primary</Button>
            </header>
        </div>
    );
}

export default Home;
