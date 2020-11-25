import React, {useState} from 'react';
import './Reservation.css'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Reservation = () => {

  const [reservation,setReservation] = useState({fullName:'',phoneNumber:'',date:'',time:'',guest:''});
  const [reservationData,setReservationData] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setReservation({...reservation,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(reservation.fullName && reservation.phoneNumber && reservation.date && reservation.time && reservation.guest ){
      const newData = {...reservation}
      setReservationData([...reservationData,newData])
      setReservation({fullName:'',phoneNumber:'',date:'',time:'',guest:''})
    }
  }

  return (
    <Container className="container-reservation" fluid>
      <h1 className="header">Reservation</h1>
      <Form>
        <Form.Group as={Col} controlId="formFullName" >
          <Form.Control type="text" className="formBox" placeholder="Full Name" name="fullName" value={reservation.fullName} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formPhoneNumber" >
          <Form.Control type="text" className="formBox" placeholder="Phone Number" name="phoneNumber" value={reservation.PhoneNumber} onChange={handleChange}/>
        </Form.Group>

        <div className="reservation-date-time-container">
          <Form.Group as={Col} controlId="formDate" >
            <Form.Control type="text" className="formBox" placeholder="Date" name="date" value={reservation.date} onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formTime" >
            <Form.Control type="text" className="formBox" placeholder="Time" name="time" value={reservation.Time} onChange={handleChange}/>
          </Form.Group>
        </div>

        <Form.Group as={Col} controlId="formGuest" >
          <Form.Control type="text" className="formBox" placeholder="Guest" name="guest" value={reservation.guest} onChange={handleChange}/>
        </Form.Group>

        <Button className="btn-reservation" variant="primary" type="submit" onClick={handleSubmit}>
          confirm
        </Button>
      </Form>
    </Container>
  );
}
export default Reservation
