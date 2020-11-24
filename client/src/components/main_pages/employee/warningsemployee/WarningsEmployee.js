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

import Modal from "react-bootstrap/Modal"



export default class WarningsEmployee extends React.Component {


  componentDidMount() {


    this.setState({
      warningList: [
        {orderID: 103404, reason: "Rude behavior", complaintantName: "Yeller",comments:"Hate this dude"},
        {orderID: 255543, reason: "Smelly", complaintantName: "Complint",comments:"Smelly person"}
    
    ]


    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    warningList: [],
    customerName: ""
     


    };
  }




 
  openModal = (e, name) => {
    e.preventDefault();
    this.setState({ isOpen: true })

  };



  closeModal = () => {
    this.setState({ isOpen: false })

  };

  getCustomerName= (e,name) => {
    
        this.setState({custonerName: name});
  }





  render() {
    return (
      <Container className="container-chef" fluid>


<Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header closeButton>
    <Modal.Title>Dispute - Order ID: {this.state.warningList.orderID}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="employeeGivenRating">
    <Form.Label>Customer Name: </Form.Label>
                    {/* ADD CUSTOMER NAME FROM API CALL  */}
                    <Form.Control readOnly placeholder="Rude A. Jole " />
                  
                  </Form.Group>


                 
                  <Form.Group controlId="employeeGivenFeedback">
                   
                    <Form.Control as="textarea" rows={3} placeholder="Explain why the warning should be revoked and provide adequate information." />
                  </Form.Group>

                </Form>
              </Modal.Body>
              <Modal.Footer>


              {/* On click, submit dispute to the api  */}
                <Button variant="primary" onClick={this.closeModal}>
                 Confirm
            </Button>

              </Modal.Footer>
            </Modal>

            <Row className="row-top">
              <Col>
                <h1>Warnings </h1>
              </Col>
            </Row>
           
            {/* Make a for loop to create several objects with information from api */}
            <Row className="row-resize">
{

            this.state.warningList.map((list, index) => (

              <div  className="warnings-list">
              <Button className="button-dispute" variant="primary" onClick={this.openModal}> Dispute</Button>
                <h2 className="order-id">Order ID:  {list.orderID}</h2>
                <h4 className="reason">Reason: {list.reason}</h4>
                <h4 className="reason">Complainant: {list.complaintantName}</h4>
                <h4 className="reason">Comments: {list.comments}</h4>
              </div>
   

) )

}
            </Row>
      </Container>
    );
 }
}