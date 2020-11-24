import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../../assets/logo.png';
import './CustomerLogin.css'

export default class CustomerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    const { email, password, errors } = this.state;
    this.setState({ errors: [] });
    if (email === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter an Email")
      }));
    }
    if (password === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter a Password")
      }));
    }
    if(errors.length === 0) {
      // Insert Backend Here.
      
    }};



   

  render() {
    return (
     
      <div>
         <div id="title"><h1>CUSTOMER LOGIN</h1></div> 
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
                    <Form.Label className="text-light">Customer Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" 
                      onChange={this.handleChange("email")}/>
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label className="text-light">Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" 
                      onChange={this.handleChange("password")}/>
                  </Form.Group>
                </Form>
                <Button className="btn-login" variant="primary" type="submit" size="lg" block
                  onClick={this.handleSubmit,this.signIn}>
                  Sign in
                </Button>
                <br/>
             
                <Link to="ForgotPassword" className="text-primary">Forgot Your Password?</Link>
              </div>
              </div>
        </Container>
        </div>
        
     
    );
  }
}