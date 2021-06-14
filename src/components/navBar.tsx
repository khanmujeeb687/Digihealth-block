import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {StorageUtil} from "../utils/storageUtil";


const MyNavBar=({leftText,onClick,buttonText}:{leftText?:string;onClick?:(a:any)=>void;buttonText?:string})=>{

  return (
      <div style={{marginBottom:100}}>
      <Navbar sticky={'top'} bg="light" expand="lg">
          <Navbar.Brand href="/">Digihealth Blocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/doctor/new">{leftText}</Nav.Link>
              </Nav>
                  {buttonText?<Button  onClick={onClick}
                      variant="outline-danger">{buttonText}</Button>:null}
          </Navbar.Collapse>
      </Navbar>
      </div>
  )  ;


}

export default MyNavBar;
