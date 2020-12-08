import React, {useState} from 'react';
import './ReviewCustomer.css'

import {Container, Row, Col,Image, FormControl, Button} from 'react-bootstrap'
import Rater from 'react-rater'

import DishPic from "./dish.jpg"

const ReviewCustomer = () => {

  const orderInfo = [{orderId: '1', delivery: true, deliveryID: '1',
  deliveryName: 'Jie Wei'}]
  const dishes = [
    {dishID:'2',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'4',image: DishPic},
    {dishID:'1',dishName:'Coca Cola',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'drink',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'3',dishName:'Nugget',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic}
  ]

  const [dishData,setDishData] = useState(dishes);

  return (
    <Container>
    <h1 className="headerReview">Feedback</h1>
    <p className="rate-your-order-tag"> Rate your order </p>
    <p className="feedback-prompt-tag">How would you rate the food out of 5 stars?</p>
    <Row className="items-to-rate-row">
      {
        dishData.map((dish, index) => (
          <Col key={index} xs="3" className="dish">
            <Image className="dish-img" src={dish.image}/>
            <h4>{dish.dishName}</h4>
            <p>Chef: {dish.chefName}</p>
            <Rater total={5}  />
          </Col>
        ))
      }
  </Row>

  { orderInfo[0].delivery
    ? <Row className="feedback-input-container">
      <p className="feedback-prompt-tag">How would you rate the delivery driver?</p>
      <div className="feedback-driver-tag-container">
        <p className="feedback-driver-name-tag"> Driver's Name: </p>
        <p className="feedback-driver-name"> Albert Felix </p>
      </div>
      <div className="feedback-type-tag-container">
        <label for="feedback-type" className="feedback-type-tag">Feedback Type:</label>
        <select class="custom-select form-control" id="feedback-type-input" required>
          <option value="">Choose</option>
          <option value="complaint">Complaint</option>
          <option value="compliment">Compliment</option>
        </select>
      </div>
      <FormControl data-testid="chat" as="textarea" rows={5} placeholder="Describe your feedback" className="feedback-description"/>
    </Row>

    : null
  }

  <Row className="feedback-input-container">
    <p className="feedback-prompt-tag">How would you rate the chef's cooking?</p>
    <div className="feedback-chef-tag-container">
      <p className="feedback-chef-name-tag"> Chef's Name: </p>
      <p className="feedback-chef-name"> Cristian Cuevas </p>
    </div>
    <div className="feedback-type-tag-container">
      <label for="feedback-type" className="feedback-type-tag">Feedback Type:</label>
      <select class="custom-select form-control" id="feedback-type-input" required>
        <option value="">Choose</option>
        <option value="complaint">Complaint</option>
        <option value="compliment">Compliment</option>
      </select>
    </div>
    <FormControl data-testid="chat" as="textarea" rows={5} placeholder="Describe your feedback" className="feedback-description"/>
  </Row>
  <Button className="feedback-enter-submit-btn" href="./Menu"> Confirm </Button>
  </Container>
  );
}
export default ReviewCustomer
