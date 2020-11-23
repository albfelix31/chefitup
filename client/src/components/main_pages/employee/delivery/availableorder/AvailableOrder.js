import React from 'react';
import './AvailableOrder.css'

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
import Logo1 from "./img/logo1.png"
import Logo2 from "./img/logo2.png"
import Logo3 from "./img/logo3.png"
import Logo4 from "./img/logo4.png"
import Logo5 from "./img/logo5.png"


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

export default class AvailableOrder extends React.Component {


  componentDidMount() {


    this.setState({
      dishes: [
        { name: "Cristian Yer", price: "80$", address: "ABC W 123th", image: Logo1, restaurant: "Chik Fil B" },
        { name: "Eddie Felix", price: "35$", address: "BCA W 200th", image: Logo2, restaurant: "BurDonalds" },
        { name: "Albert Cuevas", price: "40$", address: "BJHE E 250th", image: Logo3, restaurant: "Donald King" },
        { name: "Nahin Ozuna", price: "70$", address: "Bronx,NY", image: Logo4, restaurant: "GyuKaru" },
        { name: "Jane Doe", price: "100$", address: "El final W 160", image: Logo5, restaurant: "KDC" }

      ]


    });
  }
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      dishes: [],
      isOpenOrder: false,
      takingOrder: false,
      n: null,


    };
  }




  openModalDetails = index => (e) => {
    e.preventDefault();
    this.setState({ isOpenOrder: true, n: index })

  };

  openModalTakingOrder = index => (e) => {
    e.preventDefault();
    this.setState({ takingOrder: true, n: index })

  };



  closeModal = () => {
    this.setState({ isOpenOrder: false, takingOrder: false })

  };





  render() {
    return (
      <Container className="container-chef" fluid>



        {/* Take order Modal  */}
        <Modal show={this.state.takingOrder} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Order taken! </Modal.Title>
            </Modal.Header>
              <Modal.Footer>

                <Button variant="primary" onClick={this.closeModal}>
                  Close
            </Button>
              </Modal.Footer>





        </Modal>





            {/* Details Modal  */}
            <Modal show={this.state.isOpenOrder} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Order details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formDisnName">
                    <Form.Label>Restaurant Name: </Form.Label>
                    <Form.Control readOnly placeholder="RESTAURANT NAME" />
                  </Form.Group>

                  <Form.Group controlId="formDishDescription">
                    <Form.Label>Description</Form.Label>

                    {['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
                      <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
                        <ListGroup.Item>Quantity: 2</ListGroup.Item>
                        <ListGroup.Item>Name: Eggs</ListGroup.Item>
                        <ListGroup.Item>Price: 10$</ListGroup.Item>
                      </ListGroup>
                    ))}
                  </Form.Group>

                </Form>
              </Modal.Body>
              <Modal.Footer>

                <Button variant="primary" onClick={this.closeModal}>
                  Close
            </Button>
              </Modal.Footer>
            </Modal>

            <Row className="row-top">
              <Col>
                <h1>Available orders</h1>
              </Col>

            </Row>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Order ID" />
                </Col>
                <Col>
                  <Form.Control placeholder="Order Name" />
                </Col>

                <Col>
                  <Button className="btn-search" variant="primary">Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <Row className="row-resize">
              {
                this.state.dishes.map((list, index) => (

                  <Col key={index} sm="6" md="4" lg="3" className="book-selection">
                    <Card className="text-center dish-chef">

                      <div className="top-part">

                        <h1 id='price'>{list.price}</h1>

                        <Dropdown className="threedots-container">
                          <Dropdown.Toggle as={CustomToggle} />
                          <Dropdown.Menu size="sm" title="">
                            <Dropdown.Header onClick={this.openModalTakingOrder(index)}>✔️Take order</Dropdown.Header>
                            <Dropdown.Header onClick={this.openModalDetails(index)}>🖊️ Details</Dropdown.Header>

                          </Dropdown.Menu>
                        </Dropdown>



                      </div>


                      <Card.Img className="profile-img" src={list.image} />
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <Card.Title>
                            {list.name}
                          </Card.Title>
                          <Card.Text>
                            {list.address}
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