import React from 'react';
import './Choose.css'
import {Button,Container} from 'react-bootstrap';

export default class ChoosePage extends React.Component {

      state = {
          redirect: false,
          pathname: '/'
      }
      surferHandler = () => {
          this.setState({ redirect: true,pathname: '/Surfer' })
          this.renderRedirect();
      }
      customerHandler = () => {
        this.setState({ redirect: true,pathname: '/CustomerLogin' })
        this.renderRedirect();
      }
      employeeHandler = () => {
        this.setState({ redirect: true,pathname: '/EmployeeLogin' })
        this.renderRedirect();
      }
      renderRedirect = () => {
          if (this.state.redirect) {
              window.location.href = this.state.pathname
          }
      }

      render(){ 
        
        return (
          <div className="center">
            <Container className="rounded px-5 py-4 mx-4">
            <h2 className="text-center">ChefItUp</h2>
            <Button onClick={this.employeeHandler} className="chooseBtn" variant="primary" size="lg" block>
              Log in as a restaurant employee
            </Button>
            <Button onClick={this.customerHandler}  className="chooseBtn" variant="primary" size="lg" block>
              Log in as a customer
            </Button>
            <Button onClick={this.surferHandler} className="chooseBtn" variant="secondary" size="lg" block>
              Skip and continue as a surfer
            </Button>
            {this.renderRedirect()}
          </Container>
        </div>
      );
    }
}