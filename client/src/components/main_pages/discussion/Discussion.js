import React from "react";
import "./Discussion.css";
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
// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     className="threedots-a"
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     <span className="threedots" />
//   </a>
// ));

export default class Discussion extends React.Component {
  componentDidMount() {
    // Insert Backend Call For Textbooks When Nothing is on Search

    this.setState({
      posts: [
        {
         
          thread: " Chef Yu is really nice",
          date: "10/11/2020",
          replies: 30,
          views:45
        },
        {
         
          thread: " @User is really rude",
          date: "05/08/2020",
          replies: 1,
          views:10
        },
        {
         
          thread: "Nice burgers",
          date: "03/08/2020",
          replies: 25,
          views:100
        },
      
      ],
    });
  }


  

  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      posts: [],
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
            <h1>View Posts</h1>
          </Col>
          <Col>
          
          </Col>
        </Row>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control id="search-input" placeholder="Search post" />
            </Col>

            <Col>
              <Button className="btn-search" variant="primary">
                Search
              </Button>
            </Col>
          </Form.Row>
          <Button className="btn-thread" variant="primary">
                New Thread
              </Button>
        </Form>
        <Row className="row-resize">
          <div className="list">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  
                  <th>Thread</th>
                  <th>Date</th>
                  <th>Replies</th>
                  <th>Views</th>
            
                 
                </tr>
              </thead>
              <tbody >
                {this.state.posts.map((list, index) => (
                  <tr key={index}   onClick={() => this.openCase()}>
                     
            
                    <td>{list.thread}</td>
                    <td>{list.date}</td>
                    <td>{list.replies}</td>
                    <td>{list.views}</td>

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
