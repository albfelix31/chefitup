import React from 'react';
import './Checkout.css'

import {Container, Row, Col, Button, Image} from 'react-bootstrap'
import TakeoutPic from "./takeout.png"
import DeliveryPic from "./Delivery.jpg"
import DineinPic from "./DineIn.jpg"

const Checkout =() => {

    return (
        <Container className="container-checkout">
            <h1 className="header">Checkout</h1>
            <Row>
                <Col>
                    <Image className="img" src={DineinPic} />
                    <Button className="btn-checkout" variant="primary" href="./Reservation" >
                        Dine In
                    </Button>
                </Col>
                <Col>
                    <Image className="img" src={TakeoutPic} />
                    <Button className="btn-checkout" variant="primary" href="./Shipping" >
                        Take Out
                    </Button>
                </Col>
                <Col>
                    <Image className="img" src={DeliveryPic} />
                    <Button className="btn-checkout" variant="primary" href="./Shipping" >
                        Delivery
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout