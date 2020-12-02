import React from 'react';
import './Cases.css'
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
import Table from 'react-bootstrap/Table'
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

export default class Cases extends React.Component {
      componentDidMount() {
        // Insert Backend Call For Textbooks When Nothing is on Search

    this.setState({
        cases: [
            {id: 1244, reason: "He was rude", date: "10/11/2020", resolved:false},
            {id: 435352, reason: "Bad smell", date: "07/20/2020", resolved:true},
            {id: 2345, reason: "Food was wasted", date: "10/1/2020", resolved:false},
            {id: 6744, reason: "Chef spit on my food", date: "2/11/2020", resolved:true},
            
          ],
      });
      }

      constructor(props) {
        super(props);
        this.state = {
          search: "",
          cases: [],
          
          n: null
        };
      }

  

  render() {
    return (
      <Container  fluid>


         
      
      

<Row className="row-top">
          <Col>
              <h1>View Cases</h1>  
          </Col>
          <Col>
            <div className="total-btn">
            
              <Button className="btn-employee" variant="primary">
                Total <Badge variant="light">5</Badge>
              </Button>
              
              </div>
          </Col>
      </Row>
      <Form>
          <Form.Row>
              <Col>
              <Form.Control id="search-input"placeholder="Case ID" />
              </Col>
             
              <Col>
                  <Button className="btn-search"variant="primary">Search</Button>
              </Col>
          </Form.Row>
      </Form>
      <Row className="row-resize">
      <div className="list">
      <Table responsive  striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Reason</th>
      <th>Date</th>
      <th>Resolved</th>
    </tr>
  </thead>
  <tbody>
      { 
          this.state.cases.map((list, index) => (
    <tr>
      <td>{list.id}</td>
      <td>{list.reason}</td>
      <td>{list.date}</td>
      <td>{list.resolved}</td>
    </tr>
  ))}
  </tbody>
</Table>


   
    
   
        

</div>
       
      </Row>
    </Container>
    );
  }
}