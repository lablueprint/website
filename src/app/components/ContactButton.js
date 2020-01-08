import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Button } from 'react-bootstrap';

export default function ContactUs() {
  return (
    <div className="container-fluid py-5 contact-button">
      <Container>
        <h1>Contact Us</h1>
        <h4 className="subheader">Have a question? Message us here!</h4>
        <Button className="raised-button" href="/contact">
          Email Us
        </Button>
        <Button className="raised-button blue" href="https://facebook.com/lablueprint">
          Facebook Page
        </Button>
      </Container>
    </div>
  );
}
