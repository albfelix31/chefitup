import React from 'react';
import './MyCustomers.css'
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
import Profile from "../profile.png"
import Add from "../../img/add.png"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"
import { Fade } from 'react-bootstrap';
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

export default class MyCustomers extends React.Component {
      componentDidMount() {
        // Insert Backend Call For Textbooks When Nothing is on Search

    this.setState({
        customers: [
          {name: "Yes Sir",compliments: 1, complaints: 2, image: Profile},
          {name: "No sir",compliments: 5, complaints: 0, image: Profile},
          {name: "Joane Tho",compliments: 2, complaints: 5, image: Profile},
          {name: "Kha Zhix",compliments: 10, complaints: 3, image: Profile},
          {name: "Rengar Blizt",compliments: 2, complaints: 2, image: Profile},
        ],

        applyingCustomers: [
          {name: "Good",lastName: "Customer", userName: "Customer003", deposit:200, email:"Cgood003@gmail.com"},
          {name: "Bad",lastName: "Customer", userName: "Bad003", deposit:100, email:"BadC@gmail.com"},
         
        ],

        vipCustomers: [
          {name: "VIP",lastName: "Important", userName: "VIP001", email:"VIPImportnat@gmail.com"},
          {name: "Not",lastName: "Important", userName: "Not02",  email:"NotVip@gmail.com"},
         
        ]

      });
      }

      constructor(props) {
        super(props);
        this.state = {
          search: "",
          customers: [],
          applyingCustomers:[],
          vipCustomers:[],
          isOpen: false,
          isOpenAddCustomer:false,
          isOpenVIP:false,
          n: null
        };
      }

    openModal = index => (e) => {
        e.preventDefault();
        this.setState({ isOpen: true, n: index })
    };

    
    openModalCustomer = index => (e) => {
      e.preventDefault();
      this.setState({ isOpenAddCustomer: true, n: index })
  };

  openModalVIPRegular = index => (e) => {
    e.preventDefault();
    this.setState({ isOpenVIP: true, n: index })
};

    addEmployee = index => (e) => {
      e.preventDefault();
      this.setState({ isOpenAddCustomer: true, n: index })
  };
    closeModal = () => {
        this.setState({ isOpen: false, isOpenAddCustomer: false, isOpenVIP:false })

    };


    saveEmployee = () => {
    

      //Send information to api
    this.setState({ isOpen: false })

    }

    deleteEmployee = index => (e) => {
    e.preventDefault(); 

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
      
      
{/* Modal to add employees */}
<Modal show={this.state.isOpenAddCustomer} onHide={this.closeModal}>
<Modal.Header closeButton>
  <Modal.Title>Add Customer</Modal.Title>
</Modal.Header>


<Modal.Body>
{/* 
  For every customer, make a new form and list group */}

<div className="list">
  <ListGroup horizontal="lg" className="my-2" >
    <ListGroup.Item>First Name</ListGroup.Item>
    <ListGroup.Item>Last Name</ListGroup.Item>
    <ListGroup.Item>Username</ListGroup.Item>
    <ListGroup.Item>Deposit</ListGroup.Item>
    <ListGroup.Item>Email</ListGroup.Item>
  </ListGroup>

{ 
          this.state.applyingCustomers.map((list, index) => (
              
    <Form>
    <ListGroup horizontal="lg" className="my-2" >
    <ListGroup.Item variant="dark">{list.name}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.lastName}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.userName}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.deposit}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.email}</ListGroup.Item>
    <ListGroup.Item variant="dark">  <Button variant="primary" onClick={this.saveEmployee}>
   Accept
  </Button></ListGroup.Item>
    <ListGroup.Item variant="dark">  <Button variant="primary" onClick={this.saveEmployee}>
   Decline
  </Button></ListGroup.Item>
</ListGroup>
    
    </Form>

          ))}

</div>


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
      


      
{/* Modal to see regular/VIP customers   */}
<Modal show={this.state.isOpenVIP} onHide={this.closeModal}>
<Modal.Header closeButton>
  <Modal.Title> {this.state.n == 'vip' ? "⭐ VIP Customer" : "Regular Customers"}</Modal.Title>
</Modal.Header>

<Modal.Body>
{/* 
  For every customer, make a new form and list group */}

<div className="list">
  <ListGroup horizontal="lg" className="my-2" >
    <ListGroup.Item>First Name</ListGroup.Item>
    <ListGroup.Item>Last Name</ListGroup.Item>
    <ListGroup.Item>Username</ListGroup.Item>
    <ListGroup.Item>Deposit</ListGroup.Item>
    <ListGroup.Item>Email</ListGroup.Item>
  </ListGroup>

{ 
          this.state.applyingCustomers.map((list, index) => (
              
    <Form>
    <ListGroup horizontal="lg" className="my-2" >
    <ListGroup.Item variant="dark">{list.name}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.lastName}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.userName}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.deposit}</ListGroup.Item>
    <ListGroup.Item variant="dark">{list.email}</ListGroup.Item>
    <ListGroup.Item variant="dark">  <Button variant="primary" onClick={this.saveEmployee}>
   Accept
  </Button></ListGroup.Item>
    <ListGroup.Item variant="dark">  <Button variant="primary" onClick={this.saveEmployee}>
   Decline
  </Button></ListGroup.Item>
</ListGroup>
    
    </Form>

          ))}

</div>


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
              <h1>My Customers</h1>  
          </Col>
          <Col>
            <div className="btn-container">
              <Button className="btn-employee" onClick={this.openModalCustomer()} variant="success"><Image className="add-sign" src={Add}/>Add Customers</Button>
             <Button className="btn-employee" onClick={this.openModalVIPRegular("vip")}  variant="primary">
             ⭐ VIP <Badge variant="light">2</Badge>
              </Button>
             
              <Button onClick={this.openModalVIPRegular()} className="btn-employee" variant="primary">
                Regular <Badge variant="light">2</Badge>
              </Button>
              <Button className="btn-employee" variant="primary">
                Total <Badge variant="light">5</Badge>
              </Button>
              
              </div>
          </Col>
      </Row>
      <Form>
          <Form.Row>
              <Col>
              <Form.Control placeholder="Customer ID" />
              </Col>
              <Col>
              <Form.Control placeholder="Customer Name" />
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
          this.state.customers.map((list, index) => (
              
            <Col key={index} sm="6" md="4" lg="3" className="book-selection">           
              <Card className="text-center employees">
              <Dropdown className="threedots-container">
                  <Dropdown.Toggle as={CustomToggle} />
                  <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item onClick={this.openModal(index)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={this.deleteEmployee(index)}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>  
              <Card.Img className="profile-img" src={list.image} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Title>
                      {list.name}
                    </Card.Title>
                    <div className ="ratings">
                    <Card.Text>
                     
                      <Button className="view-compliments" variant="primary">
               View Compliments <Badge variant="light">{list.compliments}</Badge>
              </Button>
                    </Card.Text>
                    <Card.Text>
                    
                    <Button className="view-compliments"  variant="primary">
               View Complaints   <Badge id="complaints" variant="light">{list.complaints}</Badge>
              </Button>
                    </Card.Text>
                    </div>
                    
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