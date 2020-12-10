import React,{useState,useEffect}  from 'react';
import {Link} from 'react-router-dom'
import './PastOrders.css'
import {Container, Row, Col, Button,Modal,Image} from 'react-bootstrap'

import Dish from '../../../../public/FoodSample.jpg';
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
import api from '../../../API/api'

const PastOrders = () => {
 
  // const pastOrdersList = [
  //   {orderNo: 202021232, orderDate: '2020-05-20', total: '25.69', items: [{dishID: 1, dishName: 'Burger', chefID: 1, chefName: "Cristian", quantity: 5, image: Dish}, {dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]},
  //   {orderNo: 644213414, orderDate: '2020-06-15', total: '49.32', items: [{dishID: 3, dishName: 'Juice', chefID: 3, chefName: "Eddie", quantity: 1, image: Dish}, {dishID: 4, dishName: 'Soup', chefID: 4, chefName: "Nahin", quantity: 2, image: Dish}, {dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]},
  //   {orderNo: 427453142, orderDate: '2020-08-27', total: '4.12', items: [{dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]}
  // ]

  const [pastOrdersList,setPastOrdersList] = useState([]);

  useEffect( ()=>{ 
    const API = new api();
    const cookies = new Cookies();
    const userID = jwt_decode(cookies.get('token')).userId;
    let pastOrders = []
    //Fetching warnings data
    API.getPastOrders(userID).then ( orders => {
      for(let i = 0; i < orders.length; i++){
        pastOrders.push({
          orderNo: orders['orderNo'],
          orderDate: orders['orderDate'],
          total: orders['total'],
          items: Dish
        })
      }
    })
    setPastOrdersList(pastOrders);
  },[]);

  return (
    <Container>
    <h2 className="header-past-orders">My Past Orders</h2>
    <hr/>
    {
      pastOrdersList.map((order, index) => (
          <Row className="past-order-container">
            <Row className="past-order-breakdown-info">
              <Col>Order Date: {order.orderDate}</Col>
              <Col>Order #: {order.orderNo}</Col>
              <Col>Total: ${order.total}</Col>
            </Row>
            <Row className="past-order-items-container">
              {
                order.items.map((item, index2) => (
                  <Col xs="2">
                    <Image className="past-order-item-image" src={item.image} />
                    <p className="past-order-item-dishName"> {item.dishName} </p>
                    <p className="past-order-item-chefName"> {item.chefName} </p>
                  </Col>
                ))
              }
              <Button className="review-order-btn" href="./ReviewCustomer"component={Link} href={`./ReviewCustomer/${order.orderNo}`}> Review Order </Button>
              <hr className="separate-line"/>
            </Row>
          </Row>
      ))
    }
    <Button className="past-orders-go-back-btn" href="./Menu"> Go Back </Button>
    </Container>
  );
}

export default PastOrders
