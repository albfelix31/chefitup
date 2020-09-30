import React from 'react';
import '../Nav.css'
import './NavLogin.css'
import {Navbar} from 'react-bootstrap';



export default class NavLogin extends React.Component {

  render(){ 
      
      return (
        <Navbar className="navBackground" expand="lg">
            <Navbar.Brand className="navBrand" href="/">ChefItUp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
  }
}