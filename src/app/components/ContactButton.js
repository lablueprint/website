import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function ContactUs() {
  return (
    <div className="container-fluid py-5 contact-button">
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 1 }}>
            <h4 className="subheader">Have a question? Message us here!</h4>
          </Col>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 2, offset: 0 }}>
            <Button variant="light" href="/contact">
              Email Us!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
