import React from 'react';
import '../Nav.css'
import {Image,Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import ShoppingBag from '../shopping-bag.svg'

export default class NavDelivery extends React.Component {



  render(){

      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">

            <NavDropdown className="ml-auto navItem" title="Hi, Bob" id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                <NavDropdown.Item >Available Orders</NavDropdown.Item>
                <NavDropdown.Item href="/currentorder">Current Order</NavDropdown.Item>
                <NavDropdown.Item href="/pastordersdelivery">Past orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Help</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Warnings </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navSignOut" href="#action/3.6">Sign out</NavDropdown.Item>
            </NavDropdown>
            </Nav>

      
        </Navbar.Collapse>
    </Navbar>
    );
  }
}
