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
            <Form inline>
              <FormControl type="text" placeholder="Search by restaurant, chef, or dish" className="mr-sm-2 searchBar" />
              <Button className="searchBtn" variant="outline-success">Search</Button>
            </Form>
            <NavDropdown className="ml-auto navItem" title="Hi, Eddie" id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                <NavDropdown.Item href="./PastOrders">Past orders</NavDropdown.Item>
                <NavDropdown.Item href="./Payment">Payments</NavDropdown.Item>
                <NavDropdown.Item href="./Discussion">Discussion Forum</NavDropdown.Item>
                <NavDropdown.Item href="./Profile">Account</NavDropdown.Item>
                <NavDropdown.Item href="#">Help</NavDropdown.Item>
                <NavDropdown.Item href="./WarningsCustomer">Warnings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navSignOut" href="#action/3.6">Sign out</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <NavDropdown className="ml-auto shopping-menu" title={<Image className="shopping" src={ShoppingBag} fluid/>} id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
            <NavDropdown.Item href="./Cart">Shopping Cart</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}
