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
      comments:[
        {
          user: " Akali",
          joinDate: "10/11/2020",
          message:" I agree with this"
        },
        {
          user: " Ronald",
          joinDate: "10/11/2010",
          message:" I do not agree"

        }
      ]
    });
  }


  

  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      posts: [],
      comments:[],
      isOpen : false,
      caseID:1000,
      isNewThread:false, 
      n: null,
    };

    this.openPost = this.openPost.bind(this);
    this.openNewThread = this.openNewThread.bind(this);
  }

 
  openNewThread =  (e) => {
    e.preventDefault();
    this.setState({ isNewThread: true })
};

openPost(){

  this.setState({
    isOpen: true,
   
  })

}

  
  closeModal = () => {
    this.setState({ isOpen: false, isNewThread:false })

  };

       // Handle field change
       handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
      };






  render() {
    return (



      
      <Container fluid>

{/* MODAL TO OPEN EACH POST */}
<Modal animation={false} show={this.state.isOpen } onHide={this.closeModal}>
<Modal.Header closeButton>
  <Modal.Title class="mod-title"> Thread:   {/*Put CASE ID here  */} </Modal.Title>
  <Modal.Title  class="mod-title"> Date:  {/*Put DATE here  */} </Modal.Title>
  <Modal.Title  class="mod-title"> Created by:  {/*Put DATE here  */} </Modal.Title>
</Modal.Header>

<Modal.Body>
{/* 
  For every customer, make a new form and list group */}



{this.state.comments.map((list, index) => (

<Form.Group >
<Form.Label id="form-username">Username:{list.user}   {/*Put USERNAME here  */}  </Form.Label>
<Form.Label id="form-joindate">Join Date: {list.joinDate}   {/*Put JOIN DATE here  */}</Form.Label>
    <Form.Control as="textarea" disabled  readOnly  rows={3} placeholder={list.message} />
  </Form.Group>

 

))}

<Form.Group >

    <Form.Control as="textarea"  rows={3} placeholder="Add a new comment" />
   
  </Form.Group>

  {/* Submit new comment to API, with user information and join date */}
  <div id="submit-btn" ><Button >
    Submit comment
  </Button></div>
  
</Modal.Body>
<Modal.Footer>
  <Button variant="success"  >
    Close
  </Button>
 
</Modal.Footer>
</Modal>


{/* MODAL TO OPEN CREATE POST */}

<Modal animation={false} show={this.state.isNewThread} onHide={this.closeModal}>
<Modal.Header closeButton>
  <Modal.Title class="mod-title"> Title:  <Form.Control   />{/*Put CASE ID here  */} </Modal.Title>
 
</Modal.Header>

<Modal.Body>
{/* 
  For every customer, make a new form and list group */}


<Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Label>Body: {/*Put ACCUSER ID here  */}  </Form.Label>
   
    <Form.Control as="textarea" rows={3} />
  </Form.Group>




</Modal.Body>
<Modal.Footer>
  <Button variant="success" >
    Submit
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
          <Button className="btn-thread"  onClick={this.openNewThread} variant="primary">
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
                  <tr key={index}   onClick={() => this.openPost()}>
                     
            
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
