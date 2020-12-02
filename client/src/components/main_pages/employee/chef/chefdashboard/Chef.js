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
import Add from "../../img/add.png"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"
import api from '../../../../API/api'

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
      const API = new api();
      let listDishes = []
      API.getMenu().then ( dishes => {
        for(let i = 0; i < dishes.length; i++){
        listDishes.push({
          dishName: dishes[i]['dishName'],
          description: dishes[i]['description'],
          ingredients: dishes[i]['ingredients'],
          keywords: dishes[i]['keywords'],
          image: DishPic

        })
    
        this.setState({
          dishes: listDishes
        })
      }
      })
      }
    
      constructor(props) {
        super(props);
        this.state = {
          dishName: "",
          description: "",
          ingredients: "",
          keywords: "",
          search: "",
          dishes: [],
          isOpen: false,
          n: null,
          errors: [],
        };
      }
 
    openModal = index => (e) => {
        e.preventDefault();
        this.setState({ isOpen: true, n: index })
        this.setState({
          dishName: this.state.dishes[index]['dishName'],
          description:  this.state.dishes[index]['description'],
          ingredients:  this.state.dishes[index]['ingredients'],
          keywords:  this.state.dishes[index]['keywords'],
        })
    
    };
    closeModal = () => {
        this.setState({ isOpen: false })
    
    };
    

  handleChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
    };

  saveDish = (e) => {
    
    console.log(this.state.n)
    e.preventDefault();
    const { dishName, description, ingredients, keywords } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (dishName === ""){
      newState.errors.push("Please Enter the dish name for the dish.");
    }
    if (description === ""){
      newState.errors.push("Please Enter the description for the dish.");
    }
    if (ingredients === ""){
      newState.errors.push("Please Enter the ingredients for the dish.");
    }
    if (keywords === ""){
      newState.errors.push("Please Enter the keywords for the dish.");
    }
    if (newState.errors.length === 0){
      // Add textbook to database for listing, also make it show up on currently listed for the user.
      const data = this.state;
      const API = new api();
      if(this.state.n == "add"){
        API.addDish(data).then( error => {
          this.setState(({errors}) => ({
            errors: errors.concat(error)
          }));
        })
      }else{

      }
      this.setState({ isOpen: false })
    }
    this.setState(newState)
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
            <Modal.Title>{this.state.n == 'add' ? "Add Dish" : "Edit Dish"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ul data-testid="errors">
                    { this.state.errors.length > 0 &&
                      this.state.errors.map((error,index) => {
                        return <li key={index} className="text-warning"> {error} </li>
                    })
                    }
                  </ul>
              <Form>
                <Form.Group controlId="formDisnName">
                    <Form.Label>Disn Name</Form.Label>
                    <Form.Control onChange={this.handleChange("dishName")} value={this.state.dishName} placeholder="Disn Name" />
                </Form.Group>

                <Form.Group controlId="formDishDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleChange("description")} value={this.state.description} as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="formDishIngredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control onChange={this.handleChange("ingredients")} value={this.state.ingredients} placeholder="ingredients" />
                </Form.Group>

                <Form.Group controlId="formDishKeyWords">
                    <Form.Label>Key Words</Form.Label>
                    <Form.Control onChange={this.handleChange("keywords")} value={this.state.keywords} placeholder="keywords" />
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
                <Button className="btn-dish" onClick={this.openModal("add")} variant="primary"><Image className="add-sign" src={Add}/>Add Dish</Button>
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
                <Card className="text-center dish-chef">
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
                        {list.dishName}
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