import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import '../../App.css';

export default function PageHeader(props) {
  return (
    <div className="container-fluid py-5" id={props.id} style={pageHeaderStyle}>
      <Container>
        <Fade>
          <Row style={titleStyle}>
            <Col>
              <div>{props.title}</div>
            </Col>
          </Row>
          <Row style={bodyStyle}>
            <Col md={6}>
              {props.render()}
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

const pageHeaderStyle = {
  backgroundColor: '#187be5',
  minHeight: '50vh',
  backgroundSize: 'cover',
  color: 'white',
  fontFamily: 'Questrial'
};

const titleStyle = {
  fontSize: 45,
  height: 150,
  marginTop: 15
};

const bodyStyle = {
  fontSize: 25,
  lineHeight: '1.5em',
  opacity: 0.7
}
