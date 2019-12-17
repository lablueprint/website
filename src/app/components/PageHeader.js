import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';

export default function PageHeader({ title, render }) {
  return (
    <div className="container-fluid py-5 page-header">
      <Container>
        <Fade>
          <Row className="title">
            <Col>
              <div>{title}</div>
            </Col>
          </Row>
          <Row className="body">
            <Col md={6}>{render()}</Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
