import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';

export default function TeamPage() {
  return (
    <div class="container-fluid" style={jumboStyle}>
      <Container className="mb-5 text-center">
        <div style={numberStyle}>404</div>
        <div>This page does not exist!</div>
        <a href='/'>Go back to homepage</a>
      </Container>
    </div>
  );
}

const jumboStyle = {
  backgroundColor: '#efefef',
  padding: '5em'
};

const numberStyle = {
  color: '#0078e8',
  fontSize: '15vw',
  fontWeight: '500',
};