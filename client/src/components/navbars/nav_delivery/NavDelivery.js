import React from 'react';
import '../Nav.css'
import {Image,Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import ShoppingBag from '../shopping-bag.svg'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';


export default class NavDelivery extends React.Component {

  componentDidMount() {
    const cookies = new Cookies();
    if(cookies.get('token')){
      this.setState({ username: jwt_decode(cookies.get('token')).username});
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
    };
  }
  
  signOut = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove('token');
    window.location.href='/CustomerLogin';
  }

  render(){

      return (
        <Navbar className="navBackground" expand="lg">
        <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">

            <NavDropdown className="ml-auto navItem" title={"Hi, " + this.state.username}  id="basic-nav-dropdown dropdown-menu-align-right" alignRight>
                <NavDropdown.Item href="/deliveryhome">Available Orders</NavDropdown.Item>
                <NavDropdown.Item href="/currentorder">Current Order</NavDropdown.Item>
                <NavDropdown.Item href="/pastordersdelivery">Past orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Help</NavDropdown.Item>
                <NavDropdown.Item href="/Warningsemployee">Warnings </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navSignOut" href="#action/3.6">Sign out</NavDropdown.Item>
            </NavDropdown>
            </Nav>

      
        </Navbar.Collapse>
    </Navbar>
    );
  }
}
