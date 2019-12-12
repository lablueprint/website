import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Button } from 'react-bootstrap';

const contactStyle = {
  minHeight: '30vh',
  backgroundColor: '#f8f8f8',
  color: 'black',
  fontFamily: 'Roboto',
};

const headerStyle = {
  color: '#8c8c8c',
  paddingBottom: 20,
};

const buttonStyle = {
  color: 'white',
  backgroundColor: '#0078e8',
};

export default function ContactUs() {
  return (
    <div className="container-fluid py-5" style={contactStyle}>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 1 }}>
            <h4 style={headerStyle}>Have a question? Message us here!</h4>
          </Col>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 2, offset: 0 }}>
            <Button style={buttonStyle} variant="light" href="/contact">
              Email Us!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
