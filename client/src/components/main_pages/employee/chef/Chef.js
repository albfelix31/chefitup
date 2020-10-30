import React from 'react';
import ReactDOM from "react-dom";
import './Chef.css'


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
import DishPic from "./dish.jpg"
import Add from "./img/add.png"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
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
  
  

export default class Chef extends React.Component {

    componentDidMount() {
        // Insert Backend Call For Textbooks When Nothing is on Search

    this.setState({
        dishes: [
          {name: "Dish name 1", rating: "rating 1", image: DishPic},
          {name: "Dish name 2", rating: "rating 2", image: DishPic},
          {name: "Dish name 7", rating: "rating 7", image: DishPic},
          {name: "Dish name 8", rating: "rating 8", image: DishPic},
          {name: "Dish name 9", rating: "rating 9", image: DishPic},
        ]
      });
      }
    
      constructor(props) {
        super(props);
        this.state = {
          search: "",
          dishes: [],
          isOpen: false,
          n: null
        };
      }
 
    openModal = index => (e) => {
        e.preventDefault();
        this.setState({ isOpen: true, n: index })
    
    };
    closeModal = () => {
        this.setState({ isOpen: false })
    
    };
    

  saveDish = () => {
    
    console.log(this.state.n)

    this.setState({ isOpen: false })

  }

  deleteDish = index => (e) => {
    e.preventDefault(); 

    console.log(index)

  }

  render() {
    return (
    <Container className="container-chef" fluid>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Dish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Group controlId="formDisnName">
                    <Form.Label>Disn Name</Form.Label>
                    <Form.Control placeholder="Disn Name" />
                </Form.Group>

                <Form.Group controlId="formDishDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.saveDish}>
              Save
            </Button>
            <Button variant="primary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="row-top">
            <Col>
                <h1>My Dishes</h1>  
            </Col>
            <Col>
                <Button className="btn-dish" variant="primary"><Image className="add-sign" src={Add}/>Add Dish</Button>
            </Col>
        </Row>
        <Form>
            <Form.Row>
                <Col>
                <Form.Control placeholder="Dish ID" />
                </Col>
                <Col>
                <Form.Control placeholder="Dish Name" />
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" defaultValue="Rating">
                            <option>Rating</option> 
                            <option>1 Star</option>
                            <option>2 Star</option>
                            <option>3 Star</option>
                            <option>4 Star</option>
                            <option>5 Star</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Button className="btn-search"variant="primary">Search</Button>
                </Col>
            </Form.Row>
        </Form>
        <Row className="row-resize">
          { 
            this.state.dishes.map((list, index) => (
                
              <Col key={index} sm="6" md="4" lg="3" className="book-selection">           
                <Card className="text-center dish">
                <Dropdown className="threedots-container">
                    <Dropdown.Toggle as={CustomToggle} />
                    <Dropdown.Menu size="sm" title="">
                    <Dropdown.Header>Options</Dropdown.Header>
                    <Dropdown.Item onClick={this.openModal(index)}>Edits</Dropdown.Item>
                    <Dropdown.Item onClick={this.deleteDish(index)}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
                <Card.Img className="profile-img" src={list.image} />
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <Card.Title>
                        {list.name}
                      </Card.Title>
                      <Card.Text>
                        {list.rating}
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