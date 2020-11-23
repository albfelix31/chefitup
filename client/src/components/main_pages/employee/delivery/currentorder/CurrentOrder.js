import React from 'react';
import './CurrentOrder.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Logo1 from "../availableorder/img/logo1.png"


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

export default class CurrentOrder extends React.Component {


  componentDidMount() {


    this.setState({
      currentOrder: { name: "Cristian Yer", price: "80$", address: "ABC W 123th", image: Logo1, restaurant: "Chik Fil B" }
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      currentOrder: {},
     


    };
  }




 



  render() {
    return (
      <Container className="container-chef" fluid>
     
     <Row className="row-top">
              <Col>
                <h1>Current orders</h1>
              </Col>

            </Row>
     <Row className="row-resize">
              
                

                  <Col  lg="10" className="current-order-box">

                    <Card className="text-center dish-chef">

                  

                        <h1 id='price'>{this.state.currentOrder.price}</h1>

                      

                      <Card.Img className="profile-img" src={this.state.currentOrder.image} />
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <Card.Title>
                            <h1> Name: {this.state.currentOrder.name}</h1>
                          </Card.Title>
                          <Card.Text>
                          <h1>Adress: {this.state.currentOrder.address}</h1>
                          </Card.Text>
                          <Card.Text>
                          <h1>Adress: {this.state.currentOrder.restaurant}</h1>
                          </Card.Text>
                        </ListGroupItem>
                      </ListGroup>

                      <Form className="order-details">
                  
                  <Form.Group controlId="formDishDescription">
                    <Form.Label><h2>Items</h2></Form.Label>

                    <div className="list-items">
                    {['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
                      <ListGroup  horizontal={breakpoint} className="my-2" key={idx}>
                        <ListGroup.Item>Quantity: 2</ListGroup.Item>
                        <ListGroup.Item>Name: Eggs</ListGroup.Item>
                        <ListGroup.Item>Price: 10$</ListGroup.Item>
                      </ListGroup>
                    ))}
                    </div>
                  </Form.Group>

                </Form>
                <Button id="complete-button" variant="primary" onClick={this.closeModal}>
                  Complete order
            </Button>
                    </Card>

                    
                  </Col>
                
              
              
             
                

            
            </Row>
      </Container>
    );
 }
}