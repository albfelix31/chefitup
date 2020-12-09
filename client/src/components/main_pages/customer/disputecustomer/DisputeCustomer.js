import React,{useState}  from 'react';
import {useParams} from 'react-router-dom'
import './DisputeCustomer.css'
import api from '../../../API/api'
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
import {Container, Col, Form, Button} from 'react-bootstrap'

const DisputeCustomer =()=> {
    const {orderNo} = useParams()
    //Should come from warning props
    // const data={orderNo:'09080706'}
    const [dispute,setDispute] = useState({explanation:''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(dispute.explanation){
            // send data to api
            const API = new api();
            const cookies = new Cookies();
            const disputeData = {userId:jwt_decode(cookies.get('token')).userId, orderNo:orderNo,explanation:dispute.explanation}
            API.sendDispute(disputeData).then( error => {
            console.log(error);
            })
            window.location.href='/WarningCustomer';
        }
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDispute({...dispute,[name]:value})
    }
return (
    <Container className="container-dispute" fluid>
        <h1 className="header-dispute">Dispute- <small className="text-muted"> Order # {orderNo}</small></h1>
        <hr/>
        <Form>
            <Form.Group as={Col} controlId="formDisputeExplanation" >
                <Form.Control as="textarea" rows={4} type="text" className="explanationBox" placeholder="Explain why the warning should be revoked and provide adequate information." name="explanation" value={dispute.explanation} onChange={handleChange}/>
            </Form.Group>

            <Button className="btn-dispute" variant="primary" type="submit" onClick={handleSubmit}>
             confirm
            </Button>
        </Form>
    </Container>  
    );
}
export default DisputeCustomer