import React from 'react';
import '../Nav.css'
import {Image,Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import ShoppingBag from '../shopping-bag.svg'


export default class NavCustomer extends React.Component {

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
            <Form className="containerSearch" inline>
            <FormControl type="text" placeholder="Search by restaurant, chef, or dishes" className="mr-sm-2 searchBar" />
            <Button className="searchBtn" variant="outline-success">Search</Button>
            </Form>
            <NavDropdown className="ml-auto navItem" title="Hi, Eddie" id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                <NavDropdown.Item href="#action/3.1">Past orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Payments</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Discussion Forum</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navSignOut" href="#action/3.6">Sign out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
            <NavDropdown className="ml-auto shopping-menu" title={<Image className="shopping" src={ShoppingBag} fluid/>} id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

