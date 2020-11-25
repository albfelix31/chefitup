import React, {useState} from 'react';
import {Container, Row, Col, Button, Image, FormControl} from 'react-bootstrap'
import './Cart.css'
import Dish from '../../../../public/FoodSample.jpg';
import Minus from "../menu/minus.svg"
import Plus from "../menu/plus.svg"

const Cart = () => {

    const dishesInCart = [
        {dishID:'1', dishName:'Burger', price:'3.99', chefID:'1', chefName: "Cristian", image: Dish, quantity: 7},
        {dishID:'2', dishName:'Cake', price:'1.99', chefID:'2', chefName: "Albert", image: Dish, quantity: 5},
        {dishID:'3', dishName:'Juice', price:'5.99', chefID:'3', chefName: "Eddie", image: Dish, quantity: 3},
        {dishID:'4', dishName:'Soup', price:'2.99', chefID:'4', chefName: "Nahin", image: Dish, quantity: 2}
    ]

    const recentlyViewedItems = [
        {dishID:'1', dishName:'Burger', price:'3.99', chefID:'1', chefName: "Cristian", image: Dish},
        {dishID:'2', dishName:'Cake', price:'1.99', chefID:'2', chefName: "Albert", image: Dish},
        {dishID:'3', dishName:'Juice', price:'5.99', chefID:'3', chefName: "Eddie", image: Dish},
        {dishID:'4', dishName:'Soup', price:'2.99', chefID:'4', chefName: "Nahin", image: Dish}
    ]

    const [quantity,setQuantity]=useState(1)

    const [dishInCartData,setDishInCartData] = useState(dishesInCart);

    const [price, setPrice] = useState(90)
    const [delivery, setDelivery] = useState(15)

    const increaseValue = (e) => {
        const newValue = e.quantity
        // setDishInCartData({quantity: e.quantity+1})
    };

    return (
      <Container>
        <Row className="first-row">
          <Col xs={7}>
            <h2> My Order ({dishesInCart.length} Items)</h2>

                {
                    dishInCartData.map((dish, index) => (
                        <Row>
                            <Image className="dish-cart m-2" src={dish.image} />
                            <div className="m-4">
                              <h5> {dish.dishName} </h5>
                              <h5> {dish.chefName} </h5>
                            </div>

                            <div className="quantity-container m-4">
                              <label className="qty-label">Qty</label>
                              <div className="quantity-input-container">
                                  <div class="quantity-cart">
                                      <Button className="cart-item-qty-change-btn" onClick={()=>{if(quantity>1) setQuantity(quantity-1)}}>-</Button>
                                      <input className="quantity-input" type="text" name="name" value={dish.quantity}/>
                                      <Button className="cart-item-qty-change-btn" onClick={increaseValue(dish)}>+</Button>
                                  </div>
                              </div>
                            </div>
                            <p className="price-tag m-4">Price: {'\u0024'}{(parseFloat(dish.price) * quantity).toFixed(2)}</p>
                            <div>
                            </div>
                        </Row>
                    ))
                }
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
                <p>{'\u0024'}{price.toFixed(2)}</p>
              </div>
              <div className="total-amount-tags">
                <p>Estimated Delivery</p>
                <p>{'\u0024'}{delivery.toFixed(2)}</p>
              </div>
              <div className="total-amount-tags">
                <p className="order-total-tagline">Estimated Order Total</p>
                <p className="order-total-amount">{'\u0024'}{(price + delivery).toFixed(2)}</p>
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

          {
              recentlyViewedItems.map((dish, index) => (
                  <div>
                    <Image className="rvi-image" src={dish.image} />
                    <p className="rvi-dish-name"> {dish.dishName} </p>
                    <p className="rvi-chef-name"> {dish.chefName} </p>
                  </div>
              ))
          }
          </div>
        </Row>
      </Container>
    );
}

export default Cart
