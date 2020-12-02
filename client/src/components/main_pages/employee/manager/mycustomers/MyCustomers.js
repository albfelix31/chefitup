import React from 'react';
import './MyCustomers.css'
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table'
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
import api from '../../../../API/api'

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
      
          const API = new api();
          let listCustomer = []
          API.getNotApprove().then ( customers => {
            for(let i = 0; i < customers.length; i++){
              listCustomer.push({
              profileId: customers[i]['profileId'],
              userId: customers[i]['userId'],
              name: customers[i]['name'],
              userName: customers[i]['userName'],
              deposit: customers[i]['balance'],
              email: customers[i]['email'],
    
            })

            this.setState({
              applyingCustomers: listCustomer
            })
          }
          })

          API.getCustomer().then ( customers => {
            for(let i = 0; i < customers.length; i++){
              listCustomer.push({
              profileId: customers[i]['profileId'],
              userId: customers[i]['userId'],
              name: customers[i]['name'],
              compliments: 0,
              complaints: 0,
              image: Profile,
    
            })

            this.setState({
              customers: listCustomer
            })
          }
          })

    this.setState({
        

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

    acceptCustomer = index => (e) => {
      const data = {"approve": 1, "profileId": this.state.applyingCustomers[index]["profileId"]}
      const API = new api();
      API.approveCustomer(data).then(status => {

      })
      e.preventDefault();
      console.log(index)
      this.setState({ isOpenAddCustomer: true, n: index })
  };
    closeModal = () => {
        this.setState({ isOpen: false, isOpenAddCustomer: false, isOpenVIP:false })

    };


    saveEmployee = () => {
    

      //Send information to api
    this.setState({ isOpen: false })

    }

    declineCustomer = index => (e) => {
    e.preventDefault(); 
    const data = {"userId": this.state.applyingCustomers[index]["userId"], "approve": 0, "profileId": this.state.applyingCustomers[index]["profileId"]}
    const API = new api();
    API.approveCustomer(data).then(status => {

    })  
    console.log(index)

    }

  render() {
    return (
      <Container className="container-employee" fluid>


    {/*Modal for details */}
      <Modal show={this.state.isOpen} onHide={this.closeModal}>



        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <Form>
             
             <Form.Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="First name" />
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
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Address" />
                </Col>
                <Col>
                  <Form.Label>Joining date</Form.Label>
                  <Form.Control placeholder="Joining date" />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Label>Payment</Form.Label>
                  <Form.Control placeholder="Payment" />
                </Col>
                <Col>
                  <Form.Label>Balance</Form.Label>
                  <Form.Control placeholder="balace" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Subscribe</Form.Label>
                  <Form.Control placeholder="Subscribe" />
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
      <Table responsive  striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Deposit</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
      { 
          this.state.applyingCustomers.map((list, index) => (
    <tr>
      <td>{list.name}</td>
      <td>{list.userName}</td>
      <td>{list.deposit}</td>
      <td>{list.email}</td>
      <td><Button onClick={this.acceptCustomer(index)} variant="primary" >
    Accept
  </Button></td>
  <td><Button onClick={this.declineCustomer(index)} variant="primary">
    Decline
  </Button></td>
    </tr>
  ))}
  </tbody>
</Table>

</div>


</Modal.Body>
<Modal.Footer>

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
      <Table responsive  striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Deposit</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
      { 
          this.state.vipCustomers.map((list, index) => (
    <tr>
      <td>{list.name}</td>
      <td>{list.lastName}</td>
      <td>{list.userName}</td>
      <td>{"$" + list.deposit}</td>
      <td>{list.email}</td>
    </tr>
  ))}
  </tbody>
</Table>

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
              <Card className="text-center customers">
              <Dropdown className="threedots-container">
                  <Dropdown.Toggle as={CustomToggle} />
                  <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item onClick={this.openModal(index)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={this.declineCustomer(index)}>Delete</Dropdown.Item>
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