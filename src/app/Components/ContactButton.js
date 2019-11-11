import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Jumbotron, Row, Button } from 'react-bootstrap';

export default function ContactUs(props) {
  return (
    <Jumbotron style={jumboStyle} id={props.id}>
      
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 2}}>
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 2}}>
          <h4 style={headerStyle}>Have a question? Message us here!</h4>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 2, offset: 1}}>
          <Button style={buttonStyle} variant="light" href="/contact">Email Us!</Button>
        </Col>
      </Row>
    </Jumbotron>
  );
}

const jumboStyle = {
  backgroundColor: 'white',
  color: 'black'
}

const headerStyle = {
  color: '#8c8c8c',
  paddingBottom: 20
}

const buttonStyle = {
  color: 'white',
  backgroundColor: '#0078e8'
}