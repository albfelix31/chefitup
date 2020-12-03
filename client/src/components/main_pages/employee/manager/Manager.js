import React from 'react';
import './Manager.css'
import ReactDOM from "react-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Profile from "./profile.png"
import Add from "./../img/add.png"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"
import api from '../../../API/api'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="threedots-a"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="threedots" />
  </a>
));

export default class Manager extends React.Component {
      componentDidMount() {
        // Insert Backend Call For employee 



      
        const API = new api();
        let listEmployee = []
        API.getEmployee().then ( employee => {
          for(let i = 0; i < employee.length; i++){
            listEmployee.push({
            profileId: employee[i]['profileId'],
            userId: employee[i]['userId'],
            firstName: employee[i]['firstName'],
            lastName: employee[i]['lastName'],
            salary: employee[i]['salary'],
            position: employee[i]['position'],
            image: Profile
  
          })
      
          this.setState({
            employee: listEmployee
          })
        }
        })
      }

      constructor() {
        super();
        this.state = {
          token: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          employeeId: "",
          position: "",
          salary: "",
          profileId: "",
          userId:"",
          errors: [],
          employee: []
        };
      }

    openModal = index => (e) => {
        e.preventDefault();
        this.setState({ isOpen: true, n: index })
    };
    closeModal = () => {
        this.setState({ isOpen: false })

    };

      // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
    saveEmployee = (e) => {
    
    
      e.preventDefault();
      const { userName, email, firstName, lastName, phoneNumber, employeeId,position,salary, password, confirmPassword } = this.state;
      var newState = Object.assign({}, this.state);
      newState.errors = [];
      // Users are allowed to change their information as long as they enter their current password.
      // They are NOT forced to change their current password when updating their information.



          if (userName === ""){
            newState.errors.push("Please Enter the employee username.");
          }
          if (email === ""){
            newState.errors.push("Please Enter the employee email.");
          }
          if (password === ""){
            newState.errors.push("Please Enter the employee password.");
          }
          if (confirmPassword === ""){
            newState.errors.push("Please confirm password.");
          }

          if (firstName === ""){
            newState.errors.push("Please Enter the employee first name.");
          }
          if (lastName === ""){
            newState.errors.push("Please Enter the employee last name.");
          }
          if (phoneNumber === ""){
            newState.errors.push("Please Enter the employee phone number.");
          }
          if (employeeId === ""){
            newState.errors.push("Please Enter the employee id.");
          }

          if (position === ""){
            newState.errors.push("Please Enter the employee position.");
          }
          if (salary === ""){
            newState.errors.push("Please Enter the employee position salary.");
          }
       

          if (newState.errors.length === 0){ 
            if (password !== confirmPassword) {
              newState.errors.push("The New Passwords Do Not Match");
            }
            else{
              // Backend, check if the password is correct with user password in database. 
              // If so, update password using the new password, email, firstName, lastName, phoneNumber, address, city, state, zipcode
              // If not, return an error saying "Current Password is Incorrect"
              const data = this.state
              const API = new api();
              API.addEmployee(data).then( error => {
                this.setState(({errors}) => ({
                  errors: errors.concat(error)
                }));
              });
              this.setState({ isOpen: false })
            }
        }
        
      
      this.setState(newState);
  

    }

    deleteEmployee = index => (e) => {
    e.preventDefault(); 
    e.preventDefault(); 
    const API = new api();
    const data = this.state.employee[index]
    API.removeEmployee(data).then(error => {
      this.setState({ errors:  error });
    })
    console.log(index)

    }

  render() {
    return (
      <Container className="container-employee" fluid>


    {/*Modal for details */}
      <Modal show={this.state.isOpen} onHide={this.closeModal}>


        <Modal.Header closeButton>
          <Modal.Title>{this.state.n == 'add' ? "Add Employee" : "Edit Employee"}</Modal.Title>
        </Modal.Header>

        <ul data-testid="errors">
                    { this.state.errors.length > 0 &&
                      this.state.errors.map((error,index) => {
                        return <li key={index} className="text-warning"> {error} </li>
                    })
                    }
        </ul>
        <Modal.Body>
            <Form>
             
             <Form.Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder="First name" onChange={this.handleChange("firstName")}/>
                </Col>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder="Last name" onChange={this.handleChange("lastName")}/>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Username" onChange={this.handleChange("userName")}/>
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Email" onChange={this.handleChange("email")}/>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control placeholder="Password" onChange={this.handleChange("password")}/>
                </Col>
                <Col>
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control placeholder="Confirm password" onChange={this.handleChange("confirmPassword")}/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control placeholder="Employee ID" onChange={this.handleChange("employeeId")}/>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control placeholder="Phone"onChange={this.handleChange("phoneNumber")} />
                </Col>
                <Col>
                  <Form.Label>Position</Form.Label>
                  <Form.Control placeholder="Position" onChange={this.handleChange("position")}/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control placeholder="Salary" onChange={this.handleChange("salary")}/>
                </Col>
              </Form.Row>  
           
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.saveEmployee}>
            Save
          </Button>
          <Button variant="primary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      
      
      
      <Row className="row-top">
          <Col>
              <h1>My Employees</h1>  
          </Col>
          <Col>
            <div className="btn-container">
              <Button className="btn-employee" onClick={this.openModal("add")} variant="primary"><Image className="add-sign" src={Add}/>Add Employee</Button>
              <Button className="btn-employee" variant="primary">
                Total <Badge variant="light">5</Badge>
              </Button>
              </div>
          </Col>
      </Row>
      <Form>
          <Form.Row>
              <Col>
              <Form.Control placeholder="Employee ID" />
              </Col>
              <Col>
              <Form.Control placeholder="Employee Name" />
              </Col>
              <Col>
                  <Form.Group as={Col} controlId="formGridState">
                      <Form.Control as="select" defaultValue="Position">
                          <option>Position</option> 
                          <option>Driver</option>
                          <option>Chef</option>
                      </Form.Control>
                  </Form.Group>
              </Col>
              <Col>
                  <Button className="btn-search"variant="primary">Search</Button>
              </Col>
          </Form.Row>
      </Form>
      <Row className="row-resize">
        { 
          this.state.employee.map((list, index) => (
              
            <Col key={index} sm="6" md="4" lg="3" className="book-selection">           
              <Card className="text-center employees">
              <Dropdown className="threedots-container">
                  <Dropdown.Toggle as={CustomToggle} />
                  <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item onClick={this.openModal(index)}>Edits</Dropdown.Item>
                  <Dropdown.Item onClick={this.deleteEmployee(index)}>Fire</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>  
              <Card.Img className="profile-img" src={list.image} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Title>
                      {"Full name: " + list.firstName + " " + list.lastName}
                    </Card.Title>
                    <Card.Text>
                      {"Position: " + list.position}
                    </Card.Text>
                    <br />
                    <Card.Text>
                      {"Salary: $" +  list.salary}
                    </Card.Text>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>  
          ))
        }
      </Row>
    </Container>
    );
  }
}