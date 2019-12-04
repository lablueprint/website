import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ValuesTemplate from './ValuesTemplate';
import Presentation from '..//../images/values_presentation.png';
import Couple from '..//../images/values_couple.png';
import Innovation from '..//../images/values_innovation.png';
// import Shield from '..//../images/values_shield.png';

const values = [
  {
    image: Presentation,
    title: "Quality",
    text: "Blueprint strives for the best quality in our projects, members, and workshops. We meticulously choose projects that create a lasting impact."
  },
  {
    image: Couple,
    title: "Community",
    text: "Blueprint strives to create a culture where everyone is welcome – our tight-knit community is driven by our passion for social good."
  },
  {
    image: Innovation,
    title: "Innovation",
    text: "Blueprint continuously innovates to make sure our projects, workshops, and events are unique. Our creative developments are fueled by our enthusiasm and our eagerness to learn."
  }
];

export default function OurValues(props) {
  const valuesObject = values.map((item, index) => (
    <Col xs={{span: 10, offset: 1}} md={{span: 4, offset: (index % 2 === 0) ? 1 : 2 }}>
      <ValuesTemplate
        image={item.image}
        title={item.title}
        text={item.text} />
    </Col>
  ));
  return (
    <div class="container-fluid py-5" style={valuesStyle} id={props.id}>
      <Container>
        <Row>
          <Col sm={{span: 10, offset: 1}} md={{span: 10, offset: 1}}>
            <h1>Core Values</h1>
          </Col>
        </Row>
        <Row>
          {valuesObject}
        </Row>
      </Container>
    </div>
  );
}

const valuesStyle = {
  backgroundColor: '#ffffff',
  margin: 0
};