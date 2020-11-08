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
import Register from './components/access_pages/register/Register';
import Surfer from './components/main_pages/surfer/Surfer';
import CustomerLogin from './components/access_pages/login/customer_login/CustomerLogin';
import Chef from './components/main_pages/employee/chef/chefdashboard/Chef';
import DeliveryAvailable from './components/main_pages/employee/delivery/availableorder/AvailableOrder';
import Manager from './components/main_pages/employee/manager/Manager';
import WarningEmployee from './components/main_pages/employee/warningsemployee/WarningsEmployee';
import Discussion from './components/main_pages/discussion/Discussion';
import Main from './components/main_pages/customer/main/Main';
import Billing from './components/main_pages/customer/billing/Billing';
import Cart from './components/main_pages/customer/cart/Cart';
import Checkout from './components/main_pages/customer/checkout/Checkout';
import Menu from './components/main_pages/customer/menu/Menu';
import PastOrders from './components/main_pages/customer/pastorders/PastOrders';
import Payment from './components/main_pages/customer/payment/Payment';
import Profile from './components/main_pages/customer/profile/Profile';
import Reservation from './components/main_pages/customer/reservation/Reservation';
import ReviewCustomer from './components/main_pages/customer/reviewcustomer/ReviewCustomer';
import Shipping from './components/main_pages/customer/shipping/Shipping';
import WarningCustomer from './components/main_pages/customer/warningcustomer/WarningsCustomer';
import DisputeCustomer from './components/main_pages/customer/disputecustomer/DisputeCustomer';
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
      case '/checkout':
      case '/shipping':
      case '/reservation':
        return <NavCustomer/>
      case '/payment':
        return <NavCustomer/>
      case '/shipping':
        return <NavCustomer/>
      case '/checkout':
        return <NavCustomer/>
      case '/profile':
        return <NavCustomer/>
      case '/warningcustomer':
        return <NavCustomer/>
      case '/disputecustomer':
        return <NavCustomer/>
      case '/chef':
        return <NavEmployee/>
      case '/employeelogin':
      case '/customerlogin':
      case '/register':
        return <NavLogin/>
      default:
        return null
    }

  }

  displayFooter = (path) => {
    switch(path.toLowerCase()) {
      case '/customer':
      case '/checkout':
      case '/shipping':
      case '/reservation':
      case '/payment':
      case '/profile':
      case '/warningcustomer':
      case '/disputecustomer':
      case '/surfer':
        return <Footer />
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
              <Route path="/Customer" component={Main} />
              <Route path="/Chef" component={Chef} />
              <Route path="/Billing" component={Billing} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Menu" component={Menu} />
              <Route path="/DeliveryAvailable" component={DeliveryAvailable} />
              <Route path="/PastOrders" component={PastOrders} />
              <Route path="/Payment" component={Payment} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Register" component={Register} />
              <Route path="/Reservation" component={Reservation} />
              <Route path="/ReviewCustomer" component={ReviewCustomer} />
              <Route path="/Shipping" component={Shipping} />
              <Route path="/WarningCustomer" component={WarningCustomer} />
              <Route path="/DisputeCustomer" component={DisputeCustomer} />
              <Route path="/Manager" component={Manager} />
              <Route path="/Warningsemployee" component={WarningEmployee} />
              <Route path="/Discussion" component={Discussion} />
              <Route path="/" component={Choose} />
            </Switch>
          </Row>
        </Container>
        {this.displayFooter(this.props.location.pathname)}
      </Router>
    );
  }
}

export default withRouter(App);
