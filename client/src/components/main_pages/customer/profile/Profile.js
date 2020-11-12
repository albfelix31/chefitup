import React,{useState} from 'react';
import './Profile.css'

import {Container, Form, Button, Modal, Image} from 'react-bootstrap'
import Edit from "./edit.svg"


const Profile = () => {

  const [profile,setProfile] = useState({name:'Joe Biden',email:'jbiden000@citymail.cuny.edu',address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',paymentMethod:'************-1234',balance:'150.00',subscription: true});
  const [isOpen,setIsOpen]= useState(false)
  const [edit,setEdit] = useState({editName:'',editValue:''})

  const handleChange = (e) => {
    const newValue = e.target.value
    setEdit({...edit,editValue:newValue})
  }
  // This will be needed in confirm button to update the changes in API
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(payment.cardName && payment.cardNumber && payment.expMonth && payment.expYear && payment.cvv && payment.depositAmount){
  //     const newData = {...payment}
  //     setPaymentData([...paymentData,newData])
  //     setPayment({cardName:'',cardNumber:'',expMonth:'',expYear:'',cvv:'',depositAmount:''})
  //   }
  // }
  
  const openModal = (e) => {
    e.preventDefault();
    const name = e.target.name
    const value= e.target.value
    setEdit({...edit,editName:name,editValue:value})
    setIsOpen(true)
  };
  const closeModal = () => {
    setIsOpen(false)
    setEdit({editName:'',editValue:''})
  };
  const saveEdit = () => {
    if(edit.editName==="subscription"){
      setProfile({...profile,subscription:!profile.subscription})
      setIsOpen(false)
    }
    else{
      setProfile({...profile,[edit.editName]:edit.editValue})
      setIsOpen(false)
      setEdit({editName:'',editValue:''})
    }
  }

  return (
    <Container className="container-profile">
      { edit.editName !== "subscription" ?
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Body >
          <Form>
            <Form.Group controlId="formEdit">
              <Form.Label>Edit {edit.editName.toUpperCase()}</Form.Label>
              <Form.Control name={edit.editName} value={edit.editValue} placeholder={`${edit.value}`} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-edit-modal" variant="primary" onClick={saveEdit}>
            Save
          </Button>
          <Button className="btn-edit-modal" variant="primary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      :
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>Please Confirm Your {profile.subscription ? 'Unsubscription' : 'Subscription'} !</Modal.Title>
        </Modal.Header>
        <Modal.Footer >
          <Button className="btn-edit-modal" variant="primary" onClick={saveEdit}>
            Confirm
          </Button>
          <Button className="btn-edit-modal" variant="primary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      }
      <h1 className="header-profile">Account</h1>
      <hr/>
      <p><strong>Name: {profile.name}</strong>
      <Button className="btn-edit" variant="light" name="name" value={profile.name} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Email: {profile.email}</strong>
      <Button className="btn-edit" variant="light" name="email" value={profile.email} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Address: {profile.address}</strong>
      <Button className="btn-edit" variant="light" name="address" value={profile.address} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Payment Method: {profile.paymentMethod}</strong>
      <Button className="btn-edit" variant="light" name="paymentMethod" value={profile.paymentMethod} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Balance: {'\u0024'}{profile.balance}</strong>
      <Button className="btn-edit" variant="light" name="balance" value={profile.balance} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Unsubscribe Membership</strong>
      <Button className="btn-edit" variant="light" name="subscription" value={profile.subscription} onClick={openModal}>{profile.subscription ? 'Unsubscribe' : 'Subscribe'}</Button></p>
      <hr/>
      <Button className="btn-profile" variant="primary" href="/Menu">
          confirm
      </Button>
    </Container>
  );
}
export default Profile