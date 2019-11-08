import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import React from 'react';
import Landing from '../Components/Landing';

export default function TeamPage() {
  return (
    <Jumbotron style={jumboStyle} bsPrefix="text-center justify-content-center d-flex flex-column">
      <div style={numberStyle}>404</div>
      <div>This page does not exist!</div>
      <a href='/'>Go back to homepage</a>
    </Jumbotron>
  );
}

const jumboStyle = {
  backgroundColor: '#efefef',
  padding: '5em'
};

const numberStyle = {
  color: '#0078e8',
  fontSize: '200px',
  fontWeight: '500',
};