import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default function WhoWeAre(props) {
  return (
    <div className="container-fluid py-5" id={props.id} style={containerStyle}>
      <Container>
        <Row style={rowStyle}>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1}}>
          <h1 style={headerStyle}>What is Blueprint</h1>
            <p>
              Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. 
        ​    </p>
            <p>
              LA Blueprint is committed to building and promoting tech for social good - free of charge. We collaborate with non-profits to provide services such as websites, mobile applications, and data analytical tools.
            </p>
            <p>
              Blueprint is a multinational organization founded in 2012 at <a href='https://www.calblueprint.org'>UC Berkeley</a>. We are the third established chapter after the <a href='https://www.uwblueprint.org'>University of Waterloo</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const containerStyle = {
  minHeight: '50vh',
  backgroundColor: '#f8f8f8',
  color: '#7e8893'
};

const rowStyle = {
  // margin: 0
};

const headerStyle = {
  color: 'black'
};