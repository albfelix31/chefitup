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
        // Insert Backend Call For Textbooks When Nothing is on Search

    this.setState({
        employee: [
          {name: "Eddie Ozuna", position: "Manager", image: Profile},
          {name: "Cristian Cuevas", position: "Driver", image: Profile},
          {name: "Albert Felix", position: "Chef", image: Profile},
          {name: "Nahin Imtiaz", position: "Chef", image: Profile},
          {name: "Palomo Dime", position: "Driver", image: Profile},
        ]
      });
      }

      constructor(props) {
        super(props);
        this.state = {
          search: "",
          employee: [],
          isOpen: false,
          n: null
        };
      }

    openModal = index => (e) => {
        e.preventDefault();
        this.setState({ isOpen: true, n: index })
    };
    closeModal = () => {
        this.setState({ isOpen: false })

    };


    saveEmployee = () => {
    
    
    console.log(this.state.n)
    this.setState({ isOpen: false })

    }

    deleteEmployee = index => (e) => {
    e.preventDefault(); 

    console.log(index)

    }

  render() {
    return (
      <Container className="container-employee" fluid>

      <Modal show={this.state.isOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.n == 'add' ? "Add Employee" : "Edit Employee"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
             
             <Form.Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Username" />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Email" />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control placeholder="Password" />
                </Col>
                <Col>
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control placeholder="Confirm password" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control placeholder="Employee ID" />
                </Col>
                <Col>
                  <Form.Label>Joining date</Form.Label>
                  <Form.Control placeholder="Joining date" />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control placeholder="Phone" />
                </Col>
                <Col>
                  <Form.Label>Position</Form.Label>
                  <Form.Control placeholder="Position" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control placeholder="Salary" />
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
                  <Dropdown.Item onClick={this.deleteEmployee(index)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>  
              <Card.Img className="profile-img" src={list.image} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Title>
                      {list.name}
                    </Card.Title>
                    <Card.Text>
                      {list.position}
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