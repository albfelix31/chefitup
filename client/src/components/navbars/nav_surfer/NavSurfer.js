import React from 'react';
import '../Nav.css'
import './NavSurfer.css'
import {Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';



export default class NavSurfer extends React.Component {

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Form className="containerSearchSurfer" inline>
            <FormControl type="text" placeholder="Search by restaurant, chef, or dishes" className="mr-sm-2 searchBar" />
            <Button className="searchBtn" variant="outline-success">Search</Button>
            </Form>
            <Nav className="container-fluid">
                <Nav.Link className="SignOut ml-auto" href="/customerlogin">Sign in</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
