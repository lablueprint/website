import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ValuesTemplate from './ValuesTemplate';
import ricardo_milos from '..//../images/ricardo.PNG';

export default function OurValues(props) {
  return (
    <div class="container-fluid py-5" style={valuesStyle} id={props.id}>
      <Container>
        <Row>
          <Col sm={{span: 10, offset: 1}} md={{span: 3, offset: 3}}>
            <h1>Core Values</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{span: 10, offset: 1}} md={{span: 3, offset: 3}}>
            <ValuesTemplate
              image={ricardo_milos}
              title={"Peace"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 3}}>
            <ValuesTemplate
              image={ricardo_milos}
              title={"Love"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 3, offset: 3}}>
            <ValuesTemplate
              image={ricardo_milos}
              title={"Unity"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          </Col>
          <Col sm={{span: 10, offset: 1}} md={{span: 3}}>
            <ValuesTemplate
              image={ricardo_milos}
              title={"Respect"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

const valuesStyle = {
  backgroundColor: '#f8f8f8',
  margin: 0
}
