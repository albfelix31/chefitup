import  React from 'react';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  withRouter
} from 'react-router-dom';
import EmployeeLogin from './components/access_pages/login/employee_login/EmployeeLogin';
import Surfer from './components/main_pages/surfer/Surfer';
import CustomerLogin from './components/access_pages/login/customer_login/CustomerLogin';
import Employee from './components/main_pages/employee/Employee';
import Customer from './components/main_pages/customer/Customer';
import ForgotPassowrd from './components/access_pages/forgot_password/ForgotPassword';
import Choose from './components/access_pages/choose_login/Choose';
import NavCustomer from './components/navbars/nav_customer/NavCustomer';
import NavSurfer from './components/navbars/nav_surfer/NavSurfer';
import NavEmployee from './components/navbars/nav_employee/NavEmployee';
import NavLogin from './components/navbars/nav_login/NavLogin';


class App extends React.Component {

  changeNav = (path) => {

    switch(path.toLowerCase()){
      case '/surfer':
        return <NavSurfer />
      case '/customer':
        return <NavCustomer/>
      case '/employee':
        return <NavEmployee/>
      case '/employeelogin':
      case '/customerlogin':
        return <NavLogin/>
    }
    
  }

  render() {
    return (
      <Router>
        {this.changeNav(this.props.location.pathname)}
        <Container fluid>
          <Row className="justify-content-center">
            <Switch>
              <Route path="/forgotpassword" component={ForgotPassowrd} />
              <Route path="/surfer" component={Surfer} />
              <Route path="/customerlogin" component={CustomerLogin} />
              <Route path="/employeelogin" component={EmployeeLogin} />
              <Route path="/customer" component={Customer} />
              <Route path="/employee" component={Employee} />
              <Route path="/" component={Choose} />
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default withRouter(App);
