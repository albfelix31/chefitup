import React from 'react';
import './PastOrders.css'
import {Container, Row, Col, Button,Modal,Image} from 'react-bootstrap'

import Dish from '../../../../public/FoodSample.jpg';


const PastOrders = () => {
  const pastOrdersList = [
    {orderNumber: 202021232, orderDate: '02/05/20', total: '25.69', items: [{dishID: 1, dishName: 'Burger', chefID: 1, chefName: "Cristian", quantity: 5, image: Dish}, {dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]},
    {orderNumber: 644213414, orderDate: '07/26/20', total: '49.32', items: [{dishID: 3, dishName: 'Juice', chefID: 3, chefName: "Eddie", quantity: 1, image: Dish}, {dishID: 4, dishName: 'Soup', chefID: 4, chefName: "Nahin", quantity: 2, image: Dish}, {dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]},
    {orderNumber: 427453142, orderDate: '11/14/20', total: '4.12', items: [{dishID: 2, dishName: 'Cake', chefID: 2, chefName: "Albert", quantity: 2, image: Dish}]}
  ]
  return (
    <Container>
    <h2 className="header-past-orders">My Past Orders</h2>
    <hr/>
    {
      pastOrdersList.map((order, index) => (
          <Row className="past-order-container">
            <Row className="past-order-breakdown-info">
              <Col>Order Date: {order.orderDate}</Col>
              <Col>Order #: {order.orderNumber}</Col>
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
              <hr className="haa"/>
            </Row>
          </Row>
      ))
    }
    <Button className="past-orders-go-back-btn"> Go Back </Button>
    </Container>
  );
}

export default PastOrders
