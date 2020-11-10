import React,{useState}  from 'react';
import './WarningsCustomer.css'

import {Container, Row, Col, Button} from 'react-bootstrap'

const WarningsCustomer =()=> {

  const disputeData = [
    {orderNo:'09080706',reason:'Rude Behavior',complainant:'Delivery Driver',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {orderNo:'09080704',reason:'Fake Review',complainant:'Chef',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
  ]

  const [data,setData] = useState(disputeData);

  return (
    <Container className="container-warning" fluid>
      <h1 className="header-warning">Warnings- <small className="text-muted">{2} warnings recieved</small></h1>
      <hr/>
      {   
      data.map((warning,index)=>(
        <Row className="warningBox">
          <Col xs="1">
            <p>{index+1}</p>
          </Col>
          <Col xs="8">
            <strong>Order # </strong>{warning.orderNo}<br/>
            <strong>Reason: </strong>{warning.reason}<br/>
            <strong>Complainant: </strong>{warning.complainant}<br/>
            <strong>Comments: </strong>{warning.comments}<br/>
          </Col>
          <Col xs="3">
            <Button className="btn-warning-customer" variant="primary" href='./DisputeCustomer'>
                Dispute
            </Button>
          </Col>
        </Row>
      ))}
    </Container>  
  );
}
export default WarningsCustomer