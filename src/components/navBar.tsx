import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {StorageUtil} from "../utils/storageUtil";


const MyNavBar=(props:any)=>{

  return (
      <Navbar sticky={'top'} bg="light" expand="lg">
          <Navbar.Brand href="/">Digihealth Blocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/doctor/new">+ Request</Nav.Link>
              </Nav>
                  <Button  onClick={()=>{
                      StorageUtil.logout();
                      props.history.push('/');
                  }}
                      variant="outline-danger">Logout</Button>
          </Navbar.Collapse>
      </Navbar>
  )  ;


}

export default MyNavBar;
