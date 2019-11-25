import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ValuesTemplate from './ValuesTemplate';
import Couple from '..//../images/values_couple.png';
import Presentation from '..//../images/values_presentation.png';
import Shield from '..//../images/values_shield.png';
import Innovation from '..//../images/values_innovation.png';

export default function OurValues(props) {
  return (
    <div class="container-fluid py-5" style={valuesStyle} id={props.id}>
      <Container>
        <Row>
          <Col sm={{span: 10, offset: 1}} md={{span: 10, offset: 1}}>
            <h1>Core Values</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{span: 10, offset: 1}} md={{span: 5, offset: 1}}>
            <ValuesTemplate
              image={Presentation}
              title={"1. Quality"}
              text={"From developing projects, recruiting members, and to creating workshops, we strive for the best quality. We meticously chose projects that best create a positive impact on the community."} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 5}}>
            <ValuesTemplate
              image={Couple}
              title={"2. Community"}
              text={"We not only aim to build projects that would have a long lasting social impact, but create an enduring community among our members that expands outside of just working on projects for social good. "} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 5, offset: 1}}>
            <ValuesTemplate
              image={Innovation}
              title={"3. Innovation"}
              text={"We continously innovate to make sure our projects, workshops, and events are unique. This motivates us to be learn and be creative while also having fun."} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 5}}>
            <ValuesTemplate
              image={Shield}
              title={"4. Empower"}
              text={"We help empower nonprofits to accomplish their social mission through the use of technology."} />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

const valuesStyle = {
  backgroundColor: '#ffffff',
  margin: 0
};