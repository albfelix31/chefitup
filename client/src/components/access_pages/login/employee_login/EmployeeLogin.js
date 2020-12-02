import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../../assets/logo.png';
import './EmployeeLogin.css'
import api from '../../../API/api'
export default class EmployeeLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      type: ['e','m'],
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (username === "") {
      newState.errors.push("Please Enter an Username");
    }
    if (password === "") {
      newState.errors.push("Please Enter a Password");
    }
    if(newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      const API = new api();
      API.logIn(data).then( error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      });
    }
    this.setState(newState);
  };

   

  render() {
    return (
     
      <div>
         <div id="title"><h1>EMPLOYEE LOGIN</h1></div> 
        <Container className="main-container">
       

          <div className="container-logo">

            <div className="inner-container">
              <img className="logo-img" src={Logo} alt="logo" />
              <p className="logo-text">Delivery food that you will love</p></div>
              
          </div>
            <div className="container-bg rounded ">

              <div className="login-form">
              <h2 className="text-light text-center">Sign in with your ChefItUp account</h2>
                { this.state.errors.length > 0 ?  
                  this.state.errors.map((error,index) => {
                    return <li key={index} className="text-warning"> {error} </li>
                })
                : 
                <div></div>
                } 
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="text-light">Username:</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" 
                      onChange={this.handleChange("username")}/>
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label className="text-light">Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" 
                      onChange={this.handleChange("password")}/>
                  </Form.Group>
                </Form>
                <Button className="btn-login" variant="primary" type="submit" size="lg" block
                  onClick={this.handleSubmit}>
                  Sign in
                </Button>
                <br/>
             
                <Link to="ForgotPassword" id="forgot-password" className="text-primary">Forgot Your Password?</Link>
                <Link to="SignUp" id="sign-up" className="text-primary">Sign Up</Link>
              </div>
              </div>
        </Container>
        </div>
        
     
    );
  }
}