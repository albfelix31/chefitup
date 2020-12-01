import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css'
import api from '../../API/api'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            confirmedPassword: "",
            username: "",
            password: "",
            deposit: "",
            type: "c",
            errors: [],
        };
    }

    // Handle field change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, deposit, confirmedPassword, userName, errors } = this.state;
        this.setState({ errors: [] });

        if (name === "") {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Enter a Name")
            }));
        }
        if (email === "") {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Enter an Email")
            }));
        }
        if (password === "") {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Enter a Password")
            }));
        }
        if (confirmedPassword === "") {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Confirm your Password")
            }));
        }


        if (confirmedPassword !== password) {
            this.setState(({ errors }) => ({
                errors: errors.concat("Passwords do not match")
            }));
        }



        if (userName === "") {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Enter a Username")
            }));
        }
        if (errors.length === 0) {
            // Insert Backend Here.
            const data = this.state
            const API = new api();
            API.register(data).then(error => {
              this.setState(({errors}) => ({
                errors: errors.concat(error)
              }));
            })
        }
    };

    render() {
        return (

            <Container className="main-container">
            
                <div className="container-bg rounded ">

                    <div className="login-form">
                        <h2 className="text-light text-center">Sign up to ChefItUp</h2>
                        {this.state.errors.length > 0 ?
                            this.state.errors.map((error, index) => {
                                return <li key={index} className="text-warning"> {error} </li>
                            })
                            :
                            <div></div>
                        }
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label className="text-light">Name:</Form.Label>
                                <Form.Control type="" placeholder="Enter Name"
                                    onChange={this.handleChange("name")} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label className="text-light">Email Address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"
                                    onChange={this.handleChange("email")} />
                            </Form.Group>

                            <Form.Group controlId="formDeposit">
                                <Form.Label className="text-light">Deposit</Form.Label>
                                <Form.Control type="text" placeholder="Deposit"
                                    onChange={this.handleChange("deposit")} />
                            </Form.Group>

                            <Form.Group controlId="formUsername">
                                <Form.Label className="text-light">Username:</Form.Label>
                                <Form.Control type="" placeholder="Enter username"
                                    onChange={this.handleChange("username")} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label className="text-light">Password:</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"
                                    onChange={this.handleChange("password")} />
                            </Form.Group>


                            <Form.Group controlId="formPassword">
                                <Form.Label className="text-light">Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Retype password"
                                    onChange={this.handleChange("confirmedPassword")} />
                            </Form.Group>

                          
                        </Form>
                        <Button className="btn-login" variant="primary" type="submit" size="lg" block
                            onClick={this.handleSubmit}>
                            Register
                </Button>
                        <br />

                    </div>
                </div>
            </Container>


        );
    }
}