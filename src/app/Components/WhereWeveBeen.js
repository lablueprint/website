import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';

export default function MeetTheTeam() {
  return (
    <Container style={containerStyle}>
      <Row style={{height: 100}}>
        <Col><h1>Where We've Been</h1></Col>
      </Row>
      <Row>
        <Col>PPG</Col>
        <Col>Green Dot</Col>
        <Col>Stripe</Col>
        <Col>Amazon</Col>
        <Col>Avantstay</Col>
        <Col>ImpactHK</Col>
        <Col>IBM</Col>
        <Col>Cache</Col>
      </Row>
    </Container>
  );
}

const containerStyle = {
  textAlign: "center",
  fontFamily: 'Roboto',
  marginBottom: 150
};