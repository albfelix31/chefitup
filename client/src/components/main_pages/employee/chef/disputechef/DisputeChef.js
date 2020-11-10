import React,{useState} from 'react';
import './DisputeChef.css'

import {Container, Col, Form, Button} from 'react-bootstrap'

const DisputeChef =()=> {
    //Should come from warning props
    const data={orderNo:'09080706'}
    const [dispute,setDispute] = useState({explanation:''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(dispute.explanation){
            //send data to api
        }
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDispute({...dispute,[name]:value})
    }
return (
    <Container className="container-dispute" fluid>
        <h1 className="header-dispute">Dispute- <small className="text-muted"> Order # {data.orderNo}</small></h1>
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
export default DisputeChef