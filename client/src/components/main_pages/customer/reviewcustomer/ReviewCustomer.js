import React, {useState} from 'react';
import './ReviewCustomer.css'

import {Container, Row, Col,Image, FormControl, Button} from 'react-bootstrap'
import Rater from 'react-rater'

import api from '../../../API/api'

import DishPic from "./dish.jpg"

const ReviewCustomer = () => {

  const orderInfo = {orderId: '1', chefId: '1', chefName: 'Cristian Cuevas', delivery: true, deliveryID: '1',
  deliveryName: 'Jie Wei'}
  const dishes = [
    {dishID:'a',dishName:'Chesee Burger',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'main',subcategory:'',chefID:'1',chefName:"Cristian Cuevas",rating:'4',image: DishPic},
    {dishID:'b',dishName:'Coca Cola',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'drink',subcategory:'',chefID:'2',chefName:"Nahin Imtiaz",rating:'5',image: DishPic},
    {dishID:'c',dishName:'Nugget',ingredient:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',price:'3.99',category:'appetizer',subcategory:'',chefID:'3',chefName:"Eddie Ozuna",rating:'5',image: DishPic}
  ]

  const [dishData, setDishData] = useState(dishes);

  const [orderReview, setOrderReview] = useState({chefFeedback: '', chefFeedbackType: '', driverFeedback: '', driverFeedbackType: ''})


  function getDishes(numDishes) {
    var dishesRating = {}
    for(var i = 0; i < dishes.length; i++) {
      var dishID = dishes[i].dishID
      dishesRating[dishID] = 0;
    }
    return dishesRating
  }

  const [dishReview, setDishReview] = useState(getDishes(dishes.length))

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setOrderReview({...orderReview,[name]:value})
    console.log([name, value])
  }

  const setStarRating = (id, e) => {
    const dish = id
    const value = e.rating
    setDishReview({...dishReview, [dish]:value})
    console.log(dishReview)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const API = new api();
    const orderData = {...orderReview}
    const dishData = {...dishReview}
    // backend code here
    window.location.href='/Menu';
  }

  const ratedDish = dishReview
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
            <Rater total={5} name="starRating" onRating={(e) => setStarRating(dish.dishID, e)}/>
          </Col>
        ))
      }
  </Row>
  { orderInfo.delivery
    ? <Row className="feedback-input-container">
      <p className="feedback-prompt-tag">How would you rate the delivery driver?</p>
      <div className="feedback-driver-tag-container">
        <p className="feedback-driver-name-tag"> Driver's Name: </p>
        <p className="feedback-driver-name"> {orderInfo.deliveryName} </p>
      </div>
      <div className="feedback-type-tag-container">
        <label for="feedback-type" className="feedback-type-tag">Feedback Type:</label>
        <select class="custom-select form-control" id="feedback-type-input" required name="driverFeedbackType" onChange={handleChange}>
          <option value="">Choose</option>
          <option value="complaint">Complaint</option>
          <option value="compliment">Compliment</option>
        </select>
      </div>
      <FormControl data-testid="chat" as="textarea" rows={5} placeholder="Describe your feedback" className="feedback-description" name="driverFeedback" value={orderReview.driverFeedback} onChange={handleChange}/>
    </Row>

    : null
  }

  <Row className="feedback-input-container">
    <p className="feedback-prompt-tag">How would you rate the chef's cooking?</p>
    <div className="feedback-chef-tag-container">
      <p className="feedback-chef-name-tag"> Chef's Name: </p>
      <p className="feedback-chef-name"> {orderInfo.chefName} </p>
    </div>
    <div className="feedback-type-tag-container">
      <label for="feedback-type" className="feedback-type-tag">Feedback Type:</label>
      <select class="custom-select form-control" id="feedback-type-input" required name="chefFeedbackType" onChange={handleChange}>
        <option value="">Choose</option>
        <option value="complaint">Complaint</option>
        <option value="compliment">Compliment</option>
      </select>
    </div>
    <FormControl data-testid="chat" as="textarea" rows={5} placeholder="Describe your feedback" className="feedback-description" name="chefFeedback" value={orderReview.chefFeedback} onChange={handleChange}/>
  </Row>
  <Button className="feedback-enter-submit-btn" type="submit" onClick={handleSubmit}> Confirm </Button>
  </Container>
  );
}
export default ReviewCustomer
