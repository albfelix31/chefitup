import React, {useState} from 'react';
import './Shipping.css'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Shipping = () =>  {

  const [shipping,setShipping] = useState({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''});
  const [shippingData,setShippingData] = useState([])
  const [billing,setBilling] = useState({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''});
  const [billingData,setBillingData] = useState([])
  const [check,setCheck] = useState(false)

  const handleChangeShipping = (e) => {
    const name = e.target.name
    const value = e.target.value
    setShipping({...shipping,[name]:value})
  }
  const handleChangeBilling = (e) => {
    const name = e.target.name
    const value = e.target.value
    setBilling({...billing,[name]:value})
  }
  const handleCheck = (e) =>{
    setCheck(!check)
    if(!check){
      setBilling({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})
    }
    if(check){
      setBilling({...shipping})
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(check){
       setBilling({...shipping})
    }
    if(shipping.firstName && shipping.lastName && shipping.address1 && shipping.address2 && shipping.city && shipping.phone && shipping.state && shipping.zipCode &&
      billing.firstName && billing.lastName && billing.address1 && billing.address2 && billing.city && billing.phone && billing.state && billing.zipCode){

      const newShippingData = {...shipping}
      const newBillingData = {...billing}

      setShippingData([...shippingData,newShippingData])
      setShipping({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})

      setBillingData([...billingData,newBillingData])
      setBilling({firstName:'',lastName:'',address1:'',address2:'',city:'',phone:'',state:'',zipCode:''})
    }
  }

  return (
    <>
    <Form>
      <Row>
        <Col>
          <Container className="container-shipping" fluid >
            <h1 className="headerShip">Shipping Address</h1>
            <div className="shipping-fullname-container">
              <Form.Group as={Col} controlId="formShipFirstName" >
                <Form.Control type="text" className="formBox" placeholder="First Name" name="firstName" value={shipping.firstName} onChange={handleChangeShipping}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formShipLastName" >
                <Form.Control type="text" className="formBox" placeholder="Last Name" name="lastName" value={shipping.lastName} onChange={handleChangeShipping}/>
              </Form.Group>
            </div>

            <Form.Group as={Col} controlId="formShipAddress1" >
              <Form.Control type="text" className="formBox" placeholder="Address 1" name="address1" value={shipping.address1} onChange={handleChangeShipping}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formShipAddress2" >
              <Form.Control type="text" className="formBox" placeholder="Address 2" name="address2" value={shipping.address2} onChange={handleChangeShipping}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formShipCity" >
              <Form.Control type="text" className="formBox" placeholder="City" name="city" value={shipping.city} onChange={handleChangeShipping}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formShipPhone" >
              <Form.Control type="text" className="formBox" placeholder="Phone" name="phone" value={shipping.phone} onChange={handleChangeShipping}/>
            </Form.Group>

            <div className="state-zipcode-container">
              <Form.Group as={Col} controlId="formShipState" >
                <Form.Control type="text" className="formBox" placeholder="State" name="state" value={shipping.state} onChange={handleChangeShipping}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formShipZipCode" >
                <Form.Control type="text" className="formBox" placeholder="Zip Code" name="zipCode" value={shipping.zipCode} onChange={handleChangeShipping}/>
              </Form.Group>
            </div>
          </Container>
        </Col>
        <Col>
          <Container className="container-billing" fluid>
            <Form.Group controlId="formCheckbox" className="headerBill">
              <h1>Billing Address</h1>
              <div className="same-billing-address-container">
                <Form.Check className="same-billing-address-checkbox"type="checkbox" checked={check} onChange={handleCheck}/>
                <p>Same as Shipping Address?</p>
              </div>
            </Form.Group>
            {!check &&
            <>
              <div className="shipping-fullname-container">
                <Form.Group as={Col} controlId="formBillFirstName" >
                  <Form.Control type="text" className="formBox" placeholder="First Name" name="firstName" value={billing.firstName} onChange={handleChangeBilling}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formBillLastName" >
                  <Form.Control type="text" className="formBox" placeholder="Last Name" name="lastName" value={billing.lastName} onChange={handleChangeBilling}/>
                </Form.Group>
              </div>

              <Form.Group as={Col} controlId="formBillAddress1" >
                <Form.Control type="text" className="formBox" placeholder="Address 1" name="address1" value={billing.address1} onChange={handleChangeBilling}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBillAddress2" >
                <Form.Control type="text" className="formBox" placeholder="Address 2" name="address2" value={billing.address2} onChange={handleChangeBilling}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBillCity" >
                <Form.Control type="text" className="formBox" placeholder="City" name="city" value={billing.city} onChange={handleChangeBilling}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBillPhone" >
                <Form.Control type="text" className="formBox" placeholder="Phone" name="phone" value={billing.phone} onChange={handleChangeBilling}/>
              </Form.Group>

              <div className="state-zipcode-container">
                <Form.Group as={Col} controlId="formBillState" >
                  <Form.Control type="text" className="formBox" placeholder="State" name="state" value={billing.state} onChange={handleChangeBilling}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formBillZipCode" >
                  <Form.Control type="text" className="formBox" placeholder="Zip Code" name="zipCode" value={billing.zipCode} onChange={handleChangeBilling}/>
                </Form.Group>
              </div>
            </>
            }
          </Container>
        </Col>
      </Row>

      <Button className="btn-shipping" variant="primary" type="submit" onClick={handleSubmit}>
          confirm &rarr;
      </Button>
    </Form>
  </>
  );
}
export default Shipping
