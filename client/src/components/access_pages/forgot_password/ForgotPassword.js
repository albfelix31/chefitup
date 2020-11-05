import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ForgotPassword.css'

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            confirmedPassword: "",
            userName: "",
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
        const { email,errors } = this.state;
        this.setState({ errors: [] });

     
        if (email.length === 0) {
            this.setState(({ errors }) => ({
                errors: errors.concat("Please Enter an Email")
            }));
        }
       
    };

    render() {
        return (

            <Container className="main-container">
            
                <div className="container-bg  ">

                    <div className="login-form">
                        <h2 className="text-light text-center">Enter your email to reset your password</h2>
                        {this.state.errors.length > 0 ?
                            this.state.errors.map((error, index) => {
                                return <li key={index} className="text-warning"> {error} </li>
                            })
                            :
                            <div></div>
                        }
                        <Form>
                            
                            <Form.Group controlId="formEmail">
                                <Form.Label className="text-light">Email</Form.Label>
                                <Form.Control type="password" placeholder="Enter your email"
                                    onChange={this.handleChange("confirmedPassword")} />
                            </Form.Group>
                        </Form>
                        <Button className="btn-login" variant="primary" type="submit" size="lg" block
                            onClick={this.handleSubmit}>
                            Reset password
                </Button>
                        <br />

                    </div>
                </div>
            </Container>


        );
    }
}