import React from 'react';
import '../Nav.css'
import './NavEmployee.css'
import {Navbar, Nav,NavDropdown} from 'react-bootstrap';



export default class NavEmployee extends React.Component {

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
                <NavDropdown className="ml-auto navItem" title="Hi, Bob!" id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                    <NavDropdown.Item href="#action/3.1">Employee</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Customers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Discussion Forum</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Help</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navSignOut" href="#action/3.6">Sign out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}