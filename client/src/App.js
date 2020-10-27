import  React from 'react';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import EmployeeLogin from './components/access_pages/login/employee_login/EmployeeLogin';
import Surfer from './components/main_pages/surfer/Surfer';
import CustomerLogin from './components/access_pages/login/customer_login/CustomerLogin';
import Chef from './components/main_pages/employee/chef/Chef';
import Delivery from './components/main_pages/employee/delivery/Delivery';
import Manager from './components/main_pages/employee/manager/Manager';
import WarningEmployee from './components/main_pages/employee/warningsemployee/WarningsEmployee';
import Discussion from './components/main_pages/discussion/Discussion';
import Main from './components/main_pages/customer/main/Main';
import Billing from './components/main_pages/customer/billing/Billing';
import Cart from './components/main_pages/customer/cart/Cart';
import Menu from './components/main_pages/customer/menu/Menu';
import PastOrders from './components/main_pages/customer/pastorders/PastOrders';
import Payment from './components/main_pages/customer/payment/Payment';
import Profile from './components/main_pages/customer/profile/Profile';
import Reservation from './components/main_pages/customer/reservation/Reservation';
import Review from './components/main_pages/customer/review/Review';
import Shipping from './components/main_pages/customer/shipping/Shipping';
import WarningCustomer from './components/main_pages/customer/warningcustomer/WarningsCustomer';
import ForgotPassowrd from './components/access_pages/forgot_password/ForgotPassword';
import Choose from './components/access_pages/choose_login/Choose';
import NavCustomer from './components/navbars/nav_customer/NavCustomer';
import NavSurfer from './components/navbars/nav_surfer/NavSurfer';
import NavEmployee from './components/navbars/nav_employee/NavEmployee';
import NavLogin from './components/navbars/nav_login/NavLogin';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  changeNav = (path) => {

    switch(path.toLowerCase()){
      case '/surfer':
        return <NavSurfer />
      case '/customer':
        return <NavCustomer/>
      case '/chef':
        return <NavEmployee/>
      case '/employeelogin':
      case '/customerlogin':
        return <NavLogin/>
      default:
        return null
    }

  }

  render() {
    return (
      <Router>
        {this.changeNav(this.props.location.pathname)}
        <Container fluid>
          <Row className="justify-content-center">
            <Switch>
              <Route path="/Forgotpassword" component={ForgotPassowrd} />
              <Route path="/Surfer" component={Surfer} />
              <Route path="/Customerlogin" component={CustomerLogin} />
              <Route path="/Employeelogin" component={EmployeeLogin} />
              <Route path="/Main" component={Main} />
              <Route path="/Chef" component={Chef} />
              <Route path="/Billing" component={Billing} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Menu" component={Menu} />
              <Route path="/Delivery" component={Delivery} />
              <Route path="/PastOrders" component={PastOrders} />
              <Route path="/Payment" component={Payment} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Reservation" component={Reservation} />
              <Route path="/Review" component={Review} />
              <Route path="/Shipping" component={Shipping} />
              <Route path="/WarningCustomer" component={WarningCustomer} />
              <Route path="/Manager" component={Manager} />
              <Route path="/Warningsemployee" component={WarningEmployee} />
              <Route path="/Discussion" component={Discussion} />
              <Route path="/" component={Choose} />
            </Switch>
          </Row>
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default withRouter(App);
