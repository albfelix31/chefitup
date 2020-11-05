import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import {
  Link
} from 'react-router-dom'
import Dish from '../../../../public/FoodSample.jpg';

import './Main.css'

export default class Main extends React.Component {


  render() {
    return (
      <Container fluid>
        <h4 className="popDishHeader"> Top 3 Most Popular Dishes </h4>
        <Row className="popularDishes">
          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>

          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>

          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>
        </Row>
        <h4 className="highRatedDishHeader"> Top 3 Highest Rated Dishes </h4>
        <Row className="highestRatedDishes">
          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>

          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>

          <Col>
            <Image className="dish-surfer" src={Dish} />
            <h5> Dish Name </h5>
            <p> Chef Name </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
