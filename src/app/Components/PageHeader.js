import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';

const pageHeaderStyle = {
  backgroundColor: '#187be5',
  minHeight: '50vh',
  backgroundSize: 'cover',
  color: 'white',
  fontFamily: 'Questrial',
};

const titleStyle = {
  fontSize: 45,
  height: 150,
  marginTop: 15,
};

const bodyStyle = {
  fontSize: 25,
  lineHeight: '1.5em',
  opacity: 0.7,
};

export default function PageHeader(props) {
  const { id, title, render } = props;

  return (
    <div className="container-fluid py-5" id={id} style={pageHeaderStyle}>
      <Container>
        <Fade>
          <Row style={titleStyle}>
            <Col>
              <div>{title}</div>
            </Col>
          </Row>
          <Row style={bodyStyle}>
            <Col md={6}>{render()}</Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

PageHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
