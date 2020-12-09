
import './CurrentOrder.css'
import 'react-rater/lib/react-rater.css'


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Logo1 from "../availableorder/img/logo1.png"
import Rater from 'react-rater'


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



  
  openModal = (e) => {
    e.preventDefault();
    this.setState({ isOpenOrder: true })

  };



  closeModal = () => {
    this.setState({ isOpenOrder: false, takingOrder: false })

  };

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
      isOpenOrder: false


    };
  }




 



  render() {
    return (
      <Container className="container-chef" fluid>


{/* Complete order Modal  */}
<Modal show={this.state.isOpenOrder} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Leave feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="employeeGivenRating">
                    <Form.Label>Customer Name: </Form.Label>
                    {/* ADD CUSTOMER NAME FROM API CALL  */}
                    <Form.Control readOnly placeholder="Cristian C" />
                   <div id="stars"> Rating:  <select class="custom-select form-control" id="feedback-type-input" required>
          <option value="">Choose</option>
          <option value="complaint">Complaint</option>
          <option value="compliment">Compliment</option>
        </select></div>
                  </Form.Group>


                 
                  <Form.Group controlId="employeeGivenFeedback">
                    <Form.Label>Expand feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                </Form>
              </Modal.Body>
              <Modal.Footer>


              {/* On click, submit rating to the api  */}
                <Button variant="primary" onClick={this.closeModal}>
                  Submit feedback
            </Button>

  {/* On click, dont submit anything  */}
            <Button variant="primary" onClick={this.closeModal}>
                  Skip
            </Button>
              </Modal.Footer>
            </Modal>



     
     <Row className="row-top">
              <Col>
                <h1>Current orders</h1>
              </Col>

            </Row>
     <Row className="row-resize">
              
                

                  <Col  lg="10" className="current-order-box">

                    <Card className="text-center dish-chef">

                  
                  {/* IDisplay total price from API  */}
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

                  {/*Display items from the order api looping through them all  */}
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
                <Button id="complete-button" variant="primary" onClick={this.openModal}>
                  Complete order
            </Button>
                    </Card>

                    
                  </Col>
                

            </Row>
      </Container>
    );
 }
}