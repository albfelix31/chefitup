import React, {useState} from 'react';
import './Menu.css'

import {Container, Row, Col, Button,Modal,Image} from 'react-bootstrap'

import DishPic from "./dish.jpg"
import Minus from "./minus.svg"
import Plus from "./plus.svg"

const Menu = () =>{

  const dishes = [
    {dishID:'2',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'4',image: DishPic},
    {dishID:'1',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'3',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic},
    {dishID:'4',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'4',image: DishPic},
    {dishID:'5',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'5',image: DishPic},
    {dishID:'6',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic},
    {dishID:'7',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'4',image: DishPic},
    {dishID:'8',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'5',image: DishPic},
    {dishID:'9',dishName:'Cheese Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'5',image: DishPic},
    {dishID:'10',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'11',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'4',image: DishPic},
    {dishID:'12',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'5',image: DishPic},
    {dishID:'13',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'5',image: DishPic},
    {dishID:'14',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'15',dishName:'Nuggets',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic},
    {dishID:'16',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'2.99',category:'dessert',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'4',image: DishPic},
    {dishID:'17',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'2.99',category:'dessert',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'5',image: DishPic},
    {dishID:'18',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'2.99',category:'dessert',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'19',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'2.99',category:'dessert',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'4',image: DishPic},
    {dishID:'20',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'2.99',category:'dessert',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'4',image: DishPic},
    {dishID:'21',dishName:'Coca Cola',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'1.99',category:'drink',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'5',image: DishPic},
    {dishID:'22',dishName:'Fanta',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'1.99',category:'drink',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'4',image: DishPic},
    {dishID:'23',dishName:'Pepsi',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'1.99',category:'drink',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'4',image: DishPic},
    {dishID:'24',dishName:'Ginger-Ale',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'1.99',category:'drink',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'4',image: DishPic}
  ]
  //From past orders database
  const topDishes=[
    {dishID:'2',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Albert Felix",rating:'4',image: DishPic},
    {dishID:'1',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'2',chefName:"Eddie Ozuna",rating:'5',image: DishPic},
    {dishID:'3',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'3',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
  ]

  const [dishData,setDishData] = useState(dishes);
  const [topDishData,setTopDishData] = useState(topDishes);

  const [isOpen,setIsOpen]= useState(false)
  const [openDish,setOpenDish]=useState({dishID:'',image:'',name:'',price:'',ingredient:''})
  const [cart,setCart]=useState([])
  const [quantity,setQuantity]=useState(1)

  const openModal = dish => (e) => {
    e.preventDefault();
    const dishID = dish.dishID
    const image = dish.image
    const name = dish.dishName
    const price = dish.price
    const ingredient = dish.ingredient
    setOpenDish({...openDish,dishID:dishID,image:image,name:name,price:price,ingredient:ingredient})
    setIsOpen(true)
  };
  const closeModal = () => {
     setIsOpen(false)
     setOpenDish({dishID:'',image:'',name:'',price:'',ingredient:''})
     setQuantity(1)
  };
  const addCart = () => {
     setCart(cart => [...cart,{dishID:openDish.dishID,quantity:quantity}])
     setIsOpen(false)
     setOpenDish({dishID:'',image:'',name:'',price:'',ingredient:''})
     setQuantity(1)
  }

  return (

      <Container className="container-menu" fluid>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Image className="modalImage" src={openDish.image}/>
            <h2 className="modalHeader">{openDish.name}</h2>
            <p>{openDish.ingredient}</p>
            <Row className="row-modal">
              <Col xs="4">
                <h5>Price: {'\u0024'}{(parseFloat(openDish.price) * quantity).toFixed(2)}</h5>
              </Col>
              <Col xs="4">
                <div class="quantity">
                  <button className="plus-btn quantity-btn" type="button" name="button" onClick={()=>{if(quantity<20) setQuantity(quantity+1)}}>
                    <img src={Plus} alt="" />
                  </button>
                  <input type="text" name="name" value={quantity}/>
                  <button className="minus-btn quantity-btn" type="button" name="button" onClick={()=>{if(quantity>1) setQuantity(quantity-1)}}>
                    <img src={Minus} alt="" />
                  </button>
                </div>
              </Col>
            </Row>
            <Button className="btn-cart-modal" variant="primary" onClick={addCart}>
              Add to Cart
            </Button>
          </Modal.Body>
        </Modal>
        <h1 className="headerMenu">Menu</h1>
        <Row>
          <Col xs="12">
            <h3 className="header-category">Dishes You May Like</h3>
          </Col>
            {
            topDishData.map((dish, index) => (
                <Col key={index} sm="4" md="4" lg="2" className="dish" onClick={openModal(dish)}>
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefName}</p>
                </Col>

              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3 className="header-category">Appetizer</h3>
          </Col>
            {
              dishData.filter(dish => dish.category.includes("appetizer") ).map((dish, index) => (
                <Col key={index} sm="4" md="4" lg="2" className="dish" onClick={openModal(dish)}>
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefName}</p>
                </Col>

              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3 className="header-category">Main Menu</h3>
          </Col>
            {
              dishData.filter(dish => dish.category.includes("main") ).map((dish, index) => (
                <Col key={index} sm="4" md="4" lg="2" className="dish" onClick={openModal(dish)}>
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefName}</p>
                </Col>
              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3 className="header-category">Dessert</h3>
          </Col>
            {
              dishData.filter(dish => dish.category.includes("dessert") ).map((dish, index) => (
                <Col key={index} sm="4" md="4" lg="2" className="dish" onClick={openModal(dish)}>
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefName}</p>
                </Col>
              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3 className="header-category">Drinks</h3>
          </Col>
            {
              dishData.filter(dish => dish.category.includes("drink") ).map((dish, index) => (
                <Col key={index} sm="4" md="4" lg="2" className="dish" onClick={openModal(dish)}>
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefName}</p>
                </Col>
              ))
            }
        </Row>
      </Container>

  );
}

export default Menu
