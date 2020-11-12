import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css'

export default class Footer extends React.Component {
  render(){
    return (
      <Container fluid className="footer">
        <h4>ChefItUp</h4>
        <Row className="footer-box">
          <Col>
            <h5>Company</h5>
            <p> - About Us </p>
            <p> - Our Offerings </p>
            <p> - Careers </p>
          </Col>
          <Col>
            <h5>Stay Connected</h5>
            <p> - Facebook </p>
            <p> - Instagram </p>
            <p> - Twitter </p>
          </Col>
          <Col>
            <h5>Useful Links</h5>
            <p> - FAQ </p>
            <p> - Catering </p>
            <p> - Help </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
