import React from 'react';
import './WarningsEmployee.css'

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

export default class WarningsEmployee extends React.Component {


  componentDidMount() {


    this.setState({
     


    });
  }
  constructor(props) {
    super(props);
    this.state = {
      
     
     


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






            <Row className="row-top">
              <Col>
                <h1>Warnings </h1>
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
             
            </Row>
      </Container>
    );
 }
}