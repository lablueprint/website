import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="container-fluid py-5 contact-button">
      <Container>
        <h1>Contact Us</h1>
        <div className="flex-container">
          <div className="subheader-container">
            <h4>Have a question? Message us here!</h4>
          </div>
          <div className="buttons-container">
            <Link to="/contact">
              <Button className="raised-button outline-black">Email</Button>
            </Link>
            <Button
              className="raised-button blue"
              href="https://www.instagram.com/lablueprint"
            >
              Instagram
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
