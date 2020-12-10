import React,{useState,useEffect} from 'react';
import './Profile.css'

import {Container, Form, Button, Modal, Image} from 'react-bootstrap'
import Edit from "./edit.svg"
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
import api from '../../../API/api'

const Profile = () => {

  const [profile,setProfile] = useState({});
  const [isOpen,setIsOpen]= useState(false)
  const [edit,setEdit] = useState({editName:'',editValue:''})

  //Fetching profile data and setting it to profile state
  useEffect( ()=>{
    // Insert Backend Call For dishes 
    const API = new api();
    const cookies = new Cookies();
    //const userID 
    const userID = jwt_decode(cookies.get('token')).userId;
    let profile = {}
    //Fetching rating for each dish
    API.getProfile().then ( data => {
      profile = {
        name: data['name'],
        email: data['email'],
        address: data['address'],
        payment: data['payment'],
        balance: data['balance'],
        subscribe: data['subscribe']
      }
    })
    setProfile(profile);
  },[]);

  const handleChange = (e) => {
    const newValue = e.target.value
    setEdit({...edit,editValue:newValue})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(profile.name && profile.email && profile.address && profile.payment && profile.balance){
      const API = new api();
      const data = {...profile}
      API.editProfile(data).then( error => {
        console.log(error);
      })
    }
    window.location.href='/Profile';
  }
  
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
      setProfile({...profile,subscribe:!profile.subscribe})
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
            <Modal.Title>Please Confirm Your {profile.subscribe ? 'Unsubscription' : 'Subscription'} !</Modal.Title>
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
      <p><strong>Payment Method: {profile.payment}</strong>
      <Button className="btn-edit" variant="light" name="paymentMethod" value={profile.payment} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Balance: {'\u0024'}{profile.balance}</strong>
      <Button className="btn-edit" variant="light" name="balance" value={profile.balance} onClick={openModal}><Image className="edit-sign" src={Edit}/> Edit</Button></p>
      <hr/>
      <p><strong>Membership</strong>
      <Button className="btn-edit" variant="light" name="subscription" value={profile.subscribe} onClick={openModal}>{profile.subscribe ? 'Unsubscribe' : 'Subscribe'}</Button></p>
      <hr/>
      <Button className="btn-profile" variant="primary" onClick={handleSubmit}>
          confirm
      </Button>
    </Container>
  );
}
export default Profile