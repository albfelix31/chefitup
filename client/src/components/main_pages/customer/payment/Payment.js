import React,{useState} from 'react';
import './Payment.css'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Payment =() => {

  const [payment,setPayment] = useState({cardName:'',cardNumber:'',expMonth:'',expYear:'',cvv:'',depositAmount:''});
  const [paymentData,setPaymentData] = useState([])
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPayment({...payment,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(payment.cardName && payment.cardNumber && payment.expMonth && payment.expYear && payment.cvv && payment.depositAmount){
      const newData = {...payment}
      setPaymentData([...paymentData,newData])
      setPayment({cardName:'',cardNumber:'',expMonth:'',expYear:'',cvv:'',depositAmount:''})
    }
  }

  return (
    <Container className="container-payment" fluid>
      <h1 className="header">Payment</h1>
      <Form>
        <Form.Group as={Col} controlId="formCardName" >
          <Form.Control type="text" className="formBox" placeholder="Name on Card" name="cardName" value={payment.cardName} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formCardNumber" >
          <Form.Control type="text" className="formBox" placeholder="Number" name="cardNumber" value={payment.cardNumber} onChange={handleChange}/>
        </Form.Group>

        <Row>
          <Form.Group as={Col} controlId="formExpMonth" >
            <Form.Control type="text" className="formBox" placeholder="ExpirationMonth" name="expMonth" value={payment.expMonth} onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formExpYear" >
            <Form.Control type="text" className="formBox" placeholder="Expiration Year" name="expYear" value={payment.expYear} onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formCvv" >
          <Form.Control type="text" className="formBox" placeholder="Security Code" name="cvv" value={payment.cvv} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formDepositAmount" >
          <Form.Control type="text" className="formBox" placeholder="Add the amount you want to deposit" name="depositAmount" value={payment.depositAmount} onChange={handleChange}/>
        </Form.Group>

        <Button className="btn-payment" variant="primary" type="submit" onClick={handleSubmit}>
          confirm
        </Button>
      </Form>
    </Container>
  );
  
}
export default Payment