import React, {useState} from 'react';
import './Menu.css'

import {Container, Row, Col, Form, Button,Card,ListGroup,ListGroupItem,Dropdown,Modal, CardDeck,Image} from 'react-bootstrap'

import DishPic from "./dish.jpg"

const Menu = () =>{

  // const [shipping,setShipping] = useState({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''});
  // const [shippingData,setShippingData] = useState([])
  // const [billing,setBilling] = useState({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''});
  // const [billingData,setBillingData] = useState([])
  // const [check,setCheck] = useState(false)

  const dishes = [
    {dishID:'2',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'1',rating:'4',image: DishPic},
    {dishID:'1',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'2',rating:'5',image: DishPic},
    {dishID:'3',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'4',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'2',rating:'4',image: DishPic},
    {dishID:'5',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'1',rating:'5',image: DishPic},
    {dishID:'6',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'7',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'2',rating:'4',image: DishPic},
    {dishID:'8',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'1',rating:'5',image: DishPic},
    {dishID:'9',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'10',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'2',rating:'5',image: DishPic},
    {dishID:'11',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'1',rating:'4',image: DishPic},
    {dishID:'12',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'13',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'2',rating:'5',image: DishPic},
    {dishID:'14',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'1',rating:'5',image: DishPic},
    {dishID:'15',dishName:'Nuggets',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'16',dishName:'Cheese Cake',price:'2.99',category:'dessert',subcategory:'',chefID:'1',rating:'4',image: DishPic},
    {dishID:'17',dishName:'Chesee Cake',price:'2.99',category:'dessert',subcategory:'',chefID:'2',rating:'5',image: DishPic},
    {dishID:'18',dishName:'Chesee Cake',price:'2.99',category:'dessert',subcategory:'',chefID:'3',rating:'5',image: DishPic},
    {dishID:'19',dishName:'Chesee Cake',price:'2.99',category:'dessert',subcategory:'',chefID:'1',rating:'4',image: DishPic},
    {dishID:'20',dishName:'Chesee Cake',price:'2.99',category:'dessert',subcategory:'',chefID:'1',rating:'4',image: DishPic}  
  ]
  //From past orders database
  const topDishes=[
    {dishID:'2',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'1',rating:'4',image: DishPic},
    {dishID:'1',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'2',rating:'5',image: DishPic},
    {dishID:'3',dishName:'Chesee Burger',price:'3.99',category:'main',subcategory:'',chefID:'3',rating:'5',image: DishPic},
  ]

  const [dishData,setDishData] = useState(dishes);
  const [topDishData,setTopDishData] = useState(topDishes);
  // const handleChangeShipping = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setShipping({...shipping,[name]:value})
  // }
  // const handleChangeBilling = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setBilling({...billing,[name]:value})
  // }
  // const handleCheck = (e) =>{
  //   setCheck(!check)
  //   if(!check){
  //     setBilling({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})
  //   }
  //   if(check){
  //     setBilling({...shipping})
  //   }
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(check){
  //      setBilling({...shipping})
  //   }
  //   if(shipping.firstName && shipping.lastName && shipping.address1 && shipping.address2 && shipping.city && shipping.phone && shipping.state && shipping.zipCode &&
  //     billing.firstName && billing.lastName && billing.address1 && billing.address2 && billing.city && billing.phone && billing.state && billing.zipCode){
      
  //     const newShippingData = {...shipping}
  //     const newBillingData = {...billing}

  //     setShippingData([...shippingData,newShippingData])
  //     setShipping({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})

  //     setBillingData([...billingData,newBillingData])
  //     setBilling({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})
  //   }
  // }

  return (
    
      <Container className="container-menu" fluid>
        <h1 className="headerMenu">Menu</h1>
        <Row>
          <Col xs="12">
            <h3>Dishes You May Like</h3>
          </Col>
            { 
            topDishData.map((dish, index) => ( 
                <Col key={index} sm="4" md="4" lg="2" className="dish"> 
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefID}</p>  
                </Col>
                
              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3>Appetizer</h3>
          </Col>
            { 
              dishData.filter(dish => dish.category.includes("appetizer") ).map((dish, index) => ( 
                <Col key={index} sm="4" md="4" lg="2" className="dish"> 
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefID}</p>  
                </Col>
                
              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3>Main Menu</h3>
          </Col>
            { 
              dishData.filter(dish => dish.category.includes("main") ).map((dish, index) => ( 
                <Col key={index} sm="4" md="4" lg="2" className="dish"> 
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefID}</p>   
                </Col>
              ))
            }
        </Row>
        <Row>
          <Col xs="12">
            <h3>Dessert</h3>
          </Col>
            { 
              dishData.filter(dish => dish.category.includes("dessert") ).map((dish, index) => ( 
                <Col key={index} sm="4" md="4" lg="2" className="dish"> 
                  <Image className="dish-img" src={dish.image}/>
                  <h4>{dish.dishName}</h4>
                  <p>Chef - {dish.chefID}</p>   
                </Col>
              ))
            }
        </Row>
      </Container>
    
  );
} 
 
export default Menu