import React, {useState} from 'react';
import './ReviewCustomer.css'

import {Container, Row, Col,Image} from 'react-bootstrap'

import DishPic from "./dish.jpg"

const ReviewCustomer = () => {

  const dishes = [
    {dishID:'2',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'4',image: DishPic},
    {dishID:'1',dishName:'Coca Cola',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'drink',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'3',dishName:'Nugget',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic},
    {dishID:'4',dishName:'Cheese Cake',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'dessert',subcategory:'',chefID:'4',chefName:"Albert Felix",rating:'4',image: DishPic}
  ]

  const [dishData,setDishData] = useState(dishes);
  
  return (
    <Container>
    <h1 className="headerReview">Review Page</h1>
    <Row>
      { 
        dishData.map((dish, index) => ( 
          <Col key={index} sm="4" md="4" lg="2" className="dish"> 
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
export default ReviewCustomer