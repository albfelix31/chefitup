import React,{useState,useEffect}  from 'react';
import './WarningsCustomer.css'
import {Link} from 'react-router-dom'

import {Container, Row, Col, Button} from 'react-bootstrap'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
import api from '../../../API/api'

const WarningsCustomer =()=> {

  // const disputeData = [
  //   {orderNo:'09080706',reason:'Rude Behavior',complainant:'Delivery Driver',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
  //   {orderNo:'09080704',reason:'Fake Review',complainant:'Chef',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
  // ]

  const [data,setData] = useState([]);

  useEffect( ()=>{ 
    const API = new api();
    const cookies = new Cookies();
    const userID = jwt_decode(cookies.get('token')).userId;
    let warnings = []
    //Fetching warnings data
    API.getWarning(userID).then ( warning => {
      for(let i = 0; i < data.length; i++){
        warnings.push({
          orderNo: warning['orderNo'],
          complainant: warning['complainant'],
          comments: warning['comments']
        })
      }
    })
    setData(warnings);
  },[]);

  return (
    <Container className="container-warning" fluid>
      <h1 className="header-warning">Warnings- <small className="text-muted">{data.length} warnings recieved</small></h1>
      <hr/>
      {   
      data.map((warning,index)=>(
        <Row className="warningBox">
          <Col xs="1">
            <p>{index+1}</p>
          </Col>
          <Col xs="8">
            <strong>Order # </strong>{warning.orderNo}<br/>
            <strong>Complainant: </strong>{warning.complainant}<br/>
            <strong>Comments: </strong>{warning.comments}<br/>
          </Col>
          <Col xs="3">
            <Button className="btn-warning-customer" variant="primary" component={Link} href={`./DisputeCustomer/${warning.orderNo}`} >
                Dispute
            </Button>
          </Col>
        </Row>
      ))}
    </Container>  
  );
}
export default WarningsCustomer