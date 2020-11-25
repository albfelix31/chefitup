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
    const sum =()=>{
      let total = 0;
      for (let i = 0; i <cart.length; i++) {
        total = total + parseFloat(cart[i].price) * cart[i].quantity;
      }
      return total;
    }
    const [cart,setCart]= useState(dishesInCart)
    const [recentCart,setRecentCart]=useState(recentlyViewedItems)
    const [totalPrice, setTotalPrice] = useState(sum)

    const handleQuantity = (index,dish) => (e) => {
      const name = e.target.name
      const basePrice = parseFloat(dish.price)/dish.quantity
      if(name==="increase" && (dish.quantity<20)){

         const newQuantity = dish.quantity+1
         const newPrice = ''+(basePrice*(newQuantity))
         const newTotal = totalPrice + basePrice

        setTotalPrice(newTotal)

        let newArr = cart.map((item, i) => {
          if (index == i) {
            return { ...item,price:newPrice,quantity:newQuantity};
          } else {
            return item;
          }
        });
        
        setCart(newArr);
      }
      else if(name==="decrease" && (dish.quantity>1)){
        const newQuantity = dish.quantity-1
        const newPrice =  ''+(basePrice*(newQuantity))
        const newTotal = totalPrice - basePrice

        setTotalPrice(newTotal)

        let newArr = cart.map((item, i) => {
          if (index == i) {
            return { ...item,price:newPrice,quantity:newQuantity};
          } else {
            return item;
          }
        });

        setCart(newArr);
      }
    }

    return (
      <Container>
        <Row className="first-row">
          <Col xs={7}>
            <h2> My Order ({cart.length} Items)</h2>

                {
                    cart.map((dish, index) => (
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
                                      <Button className="cart-item-qty-change-btn" name="decrease" onClick={handleQuantity(index,dish)}>-</Button>
                                      <input className="quantity-input" type="text" name="name" value={dish.quantity}/>
                                      <Button className="cart-item-qty-change-btn" name="increase" onClick={handleQuantity(index,dish)}>+</Button>
                                  </div>
                              </div>
                            </div>
                            <p className="price-tag m-4">Price: {'\u0024'}{parseFloat(dish.price).toFixed(2)}</p>
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
                <p>{'\u0024'}{totalPrice.toFixed(2)}</p>
              </div>
              <div className="total-amount-tags">
                <p>Estimated Delivery</p>
                <p>{'\u0024'}{6}</p>
              </div>
              <div className="total-amount-tags">
                <p className="order-total-tagline">Estimated Order Total</p>
                <p className="order-total-amount">{'\u0024'}{(totalPrice+6).toFixed(2)}</p>
              </div>
              <hr className="line-break"/>
              <p className="vip-discount-tagline p-3">You have qualified for VIP discount</p>
            </div>
            <Button className="checkout-button" href="./checkout"> Take me to checkout </Button>
          </Col>
        </Row>

        <Row className="second-row">
          <h4> Recently Viewed Items </h4>
          <div className="recently-viewed-items">

          {
              recentCart.map((dish, index) => (
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
