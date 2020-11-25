import React from 'react';
import {Container, Row, Col, Button, Image, FormControl} from 'react-bootstrap'
import './Cart.css'
import Dish from '../../../../public/FoodSample.jpg';

export default class Cart extends React.Component {


  render() {
    return (
      <Container>
        <Row className="first-row">
          <Col xs={7}>
            <h2> My Order (3 Items)</h2>

            <Row>
              <Image className="dish-cart m-2" src={Dish} />
              <div className="m-4">
                <h5> Dish Name </h5>
                <h5> Chef Name </h5>
              </div>
              <div className="quantity-container m-4">
                <label for="quantity" className="qty-label">Qty</label>
                <div className="quantity-input-container">
                  <Button className="cart-item-qty-change-btn" onclick="handleClick()">-</Button>
                  <input className="quantity-input" type="number" min="0" max="10" default="2"/>
                  <Button className="cart-item-qty-change-btn" onclick="increment()">+</Button>
                </div>
              </div>
              <p className="price-tag m-4"> Price: $3.00 </p>
              <div>
              </div>
            </Row>
            <Row>
              <Image className="dish-cart m-2" src={Dish} />
              <div className="m-4">
                <h5> Dish Name </h5>
                <h5> Chef Name </h5>
              </div>
              <div className="quantity-container m-4">
                <label for="quantity" className="qty-label">Qty</label>
                <div className="quantity-input-container">
                  <Button className="cart-item-qty-change-btn" onclick="handleClick()">-</Button>
                  <input className="quantity-input" type="number" min="0" max="10" default="2"/>
                  <Button className="cart-item-qty-change-btn" onclick="increment()">+</Button>
                </div>
              </div>
              <p className="price-tag m-4"> Price: $3.00 </p>
              <div>
              </div>
            </Row>

            <Row>
              <Image className="dish-cart m-2" src={Dish} />
              <div className="m-4">
                <h5> Dish Name </h5>
                <h5> Chef Name </h5>
              </div>
              <div className="quantity-container m-4">
                <label for="quantity" className="qty-label">Qty</label>
                <div className="quantity-input-container">
                  <Button className="cart-item-qty-change-btn" onclick="handleClick()">-</Button>
                  <input className="quantity-input" type="number" min="0" max="10" default="2"/>
                  <Button className="cart-item-qty-change-btn" onclick="increment()">+</Button>
                </div>
              </div>
              <p className="price-tag m-4"> Price: $3.00 </p>
              <div>
              </div>
            </Row>
          </Col>

          <Col>
            <h3> My Order Summary </h3>
            <div className="order-summary-container">
              <p className="coupon-label">HAVE A COUPON?</p>
              <div className="coupon-input m-3">
                <FormControl className="coupon-input-field" placeholder="Enter coupon code"/>
                <Button className="coupon-apply-btn"> Apply </Button>
              </div>
              <div className="total-amount-tags">
                <p>Subtotal</p>
                <p>$175.97</p>
              </div>
              <div className="total-amount-tags">
                <p>Estimated Shipping</p>
                <p>-</p>
              </div>
              <div className="total-amount-tags">
                <p className="order-total-tagline">Estimated Order Total</p>
                <p className="order-total-amount">$180.97</p>
              </div>
              <hr className="line-break"/>
              <p className="vip-discount-tagline p-3">You have qualified for VIP discount</p>
            </div>
            <Button className="checkout-button"> Take me to checkout </Button>
          </Col>
        </Row>

        <Row className="second-row">
          <h4> Recently Viewed Items </h4>
          <div className="recently-viewed-items">
            <div>
              <Image className="rvi-image" src={Dish} />
              <p className="rvi-dish-name"> Dish Name </p>
              <p className="rvi-chef-name"> Chef Name </p>
            </div>
            <div>
              <Image className="rvi-image" src={Dish} />
              <p className="rvi-dish-name"> Dish Name </p>
              <p className="rvi-chef-name"> Chef Name </p>
            </div>
            <div>
              <Image className="rvi-image" src={Dish} />
              <p className="rvi-dish-name"> Dish Name </p>
              <p className="rvi-chef-name"> Chef Name </p>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
