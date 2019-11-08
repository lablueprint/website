import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Image, Jumbotron, Row } from 'react-bootstrap';
import blueprint_royce_hall from '..//../images/blueprint_royce_hall2.png';

export default function WhoWeAre(props) {
  return (
    <Jumbotron fluid style={jumboStyle} id={props.id}>
      <Row style={rowStyle}>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 2}}>
        <h1>What is Blueprint</h1>
          <p>
            Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. 
      ​    </p>
          <p>
            UCLA Blueprint is committed to building and promoting tech for social good - free of charge. We collaborate with non-profits to provide services such as websites, mobile applications, and data analytical tools.
          </p>
          <p>
            Blueprint is a multinational organization founded in 2012 at UC Berkeley. We are the third established chapter after the University of Waterloo.
          </p>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1}}>
          <Image src={blueprint_royce_hall} fluid></Image>
        </Col>
      </Row>
    </Jumbotron>
  );
}

const jumboStyle = {
  backgroundColor: '#0078e8',
  color: 'white',
  margin: 0
}

const rowStyle = {
  margin: 0
}