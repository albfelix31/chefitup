import React from "react";
import "./Cases.css";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="threedots-a"
    href=""
    ref={ref}
    onClick={(e) => {
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
        {
          id: 1244,
          reason: "He was rude",
          date: "10/11/2020",
          resolved: false,
        },
        { id: 435352, reason: "Bad smell", date: "07/20/2020", resolved: true },
        {
          id: 2345,
          reason: "Food was wasted",
          date: "10/1/2020",
          resolved: false,
        },
        {
          id: 6744,
          reason: "Chef spit on my food",
          date: "2/11/2020",
          resolved: true,
        },
      ],
    });
  }


  

  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cases: [],
      isOpen : false,
      caseID:1000,
      n: null,
    };

    this.openCase = this.openCase.bind(this);
  }


  openCase(id){

    this.setState({
      isOpen: true,
      caseID: id
    })

  }

  
  closeModal = () => {
    this.setState({ isOpen: false})

  };






  render() {
    return (



      
      <Container fluid>


<Modal animation={false} show={this.state.isOpen } onHide={this.closeModal}>
<Modal.Header closeButton>
  <Modal.Title class="mod-title"> Case:  {/*Put CASE ID here  */} </Modal.Title>
  <Modal.Title  class="mod-title"> Date:  {/*Put DATE here  */} </Modal.Title>
</Modal.Header>

<Modal.Body>
{/* 
  For every customer, make a new form and list group */}


<Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Label>Accuser ID: {/*Put ACCUSER ID here  */}  </Form.Label>
    <Form.Label>Explanation from accuser</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea2">
  <Form.Label>Defendant ID: {/*Put DEFENDANT ID here  */}  </Form.Label>
    <Form.Label>Explanation from defendant</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>



</Modal.Body>
<Modal.Footer>
  <Button variant="success" >
    Accept
  </Button>
  <Button variant="danger" >
    Decline
  </Button>
</Modal.Footer>
</Modal>







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
              <Form.Control id="search-input" placeholder="Case ID" />
            </Col>

            <Col>
              <Button className="btn-search" variant="primary">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Row className="row-resize">
          <div className="list">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Resolved</th>
                 
                </tr>
              </thead>
              <tbody >
                {this.state.cases.map((list, index) => (
                  <tr key={index}   onClick={() => this.openCase()}>
                    <td >{list.id}</td>
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
