import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './ReviewCustomer.css'

import {Container, Row, Col,Image, FormControl, Button} from 'react-bootstrap'
import Rater from 'react-rater'
import api from '../../../API/api'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';

const ReviewCustomer = () => {
  const {orderNo} = useParams()

  // const dishes = [
  //   {dishId:'1',dishName:'Chesee Burger',image: DishPic,chefId: '1', chefName: 'Cristian Cuevas'},
  //   {dishId:'2',dishName:'Coca Cola',image: DishPic,chefId: '1', chefName: 'Cristian Cuevas'},
  //   {dishId:'3',dishName:'Nugget',image: DishPic,chefId: '1', chefName: 'Cristian Cuevas'}
  // ]
  //const [dishData, setDishData] = useState(dishes);
  //const orderInfo = {items: dishData, delivery: true, deliveryId: '1', deliveryName: 'Jie Wei'}

  const [orderInfo,setOrderInfo]= useState()
  const [ratingList,setRatingList]=useState([])
  const [orderReview, setOrderReview] = useState({chefFeedback: '', chefFeedbackType: '', driverFeedback: '', driverFeedbackType: '',dishRating:''})
 
  // This is how the data should be fetched. || means a new fetch
  //orderNo,userId >> Items,delivery,deliveryId || deliveryID >> deliveryName || item[i].dishId >> dishName,image, chefId,ChefName 
  
  //fetching orderInfo data
  useEffect( ()=>{

    const API = new api();
    const cookies = new Cookies();
    const userId = jwt_decode(cookies.get('token')).userId;
    
    let pastOrder = {}
    let itemInfo = []
    //fetching pastOrders
    API.getPastOrders(userId).then ( orders => {
      if(orders.orderNo===orderNo) {
        for(let i = 0; i < orders.items.length; i++){
          //fetching chef data using dishId
          API.getChef(orders.items[i]['dishId']).then ( chef => {
            itemInfo.push({
              dishId: orders.items[i]['dishId'],
              dishName: orders.items[i]['dishName'],
              chefId: chef['chefId'],
              chefName: chef['chefName'],
              image: orders.items[i]['image']
            })
          })
        }
        pastOrder = {items: itemInfo, delivery: orders['delivery'], deliveryId: orders['deliveryId'], deliveryName: orders['deliveryName']}
        setOrderInfo(pastOrder);
      }
    })
  },[]);

  useEffect( ()=>{

    const API = new api();
    const cookies = new Cookies();
    const userId = jwt_decode(cookies.get('token')).userId;

    let rateList = []
    // fetching pastOrder data and for each dishId, initializing star rating to 0 
    API.getPastOrders(userId).then ( orders => {
      if(orders.orderNo===orderNo) {
        for(let i = 0; i < orders.items.length; i++){
          rateList.push({
            dishId: orders.items[i]['dishId'],
            rating: 0
          })
        }
        setRatingList(rateList)
      }
    })
  },[]);

  const handleRating = (index,item) => (e) => {
    const rating = e.rating
    const dishId = item.dishId
    let newList = ratingList.map((data, i) => {
      if (index == i) {
        return { ...data,dishId:dishId,rating:rating};
      } else {
        return data;
      }
    });
    setRatingList(newList);
    setOrderReview({...orderReview,dishRating:ratingList})
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setOrderReview({...orderReview,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let ratingExist = true
    for(let i = 0; i < ratingList.length; i++){
      if(ratingList[i].rating===0) ratingExist = false;
    }
    if(orderReview.chefFeedback && orderReview.chefFeedbackType && orderReview.driverFeedback && orderReview.driverFeedbackType && ratingExist ){
      // send data to api
      const API = new api();
      const cookies = new Cookies();
      // sending overall orderReview to reviewDatabase
      API.setReview(orderNo,orderReview).then( error => {
        console.log(error);
      })
      // sending warning to each chef if dish rating is below 2 
      for(let i = 0; i < ratingList.length; i++){
        if(ratingList[i].rating <=2) {
          const warningData = {
            orderNo:orderNo,
            complainant:jwt_decode(cookies.get('token')).username,
            complainantId:jwt_decode(cookies.get('token')).userId,
            comments:orderReview.chefFeedback
          }
          API.sendWarningChef(orderInfo.items[i].chefId,warningData).then( error => {
            console.log(error);
          })
        }
      }
      // sending warning to driver if feedbackType is 'complaint'
      if(orderReview.driverFeedbackType ==="complaint") {
        const warningData = {
          orderNo:orderNo,
          complainant:jwt_decode(cookies.get('token')).username,
          complainantId:jwt_decode(cookies.get('token')).userId,
          comments:orderReview.driverFeedback
        }
        API.sendWarningDelivery(setOrderInfo.deliveryId,warningData).then( error => {
          console.log(error);
        })
      }
      
      window.location.href='/PastOrders';
    }
  }

  return (
    <Container>
    <h1 className="headerReview">Feedback</h1>
    <p className="rate-your-order-tag"> Rate your order </p>
    <p className="feedback-prompt-tag">How would you rate the food out of 5 stars?</p>
    <Row className="items-to-rate-row">
      {
        orderInfo.items.map((item, index) => (
          <Col key={index} xs="3" className="dish">
            <Image className="dish-img" src={item.image}/>
            <h4>{item.dishName}</h4>
            <p>Chef: {item.chefName}</p>
            <Rater total={5} name="starRating" rating={ratingList[index].rating} onRate={handleRating(index,item)}/>
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
    {/* <div className="feedback-chef-tag-container">
      <p className="feedback-chef-name-tag"> Chef's Name: </p>
      <p className="feedback-chef-name"> {orderInfo.chefName} </p>
    </div> */}
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
