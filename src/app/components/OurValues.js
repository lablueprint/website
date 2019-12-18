import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ValuesTemplate from './ValuesTemplate';

import Presentation from '../assets/images/values/presentation.png';
import Couple from '../assets/images/values/couple.png';
import Innovation from '../assets/images/values/innovation.png';

const values = [
  {
    image: Innovation,
    title: 'Innovation',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint continuously innovates to make sure our projects, workshops, and events are unique. \
      Our creative developments are fueled by our enthusiasm and our eagerness to learn.',
  },
  {
    image: Presentation,
    title: 'Quality',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint strives for the best quality in our projects, members, and workshops. We meticulously \
      choose projects that create a lasting impact.',
  },
  {
    image: Couple,
    title: 'Community',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint strives to create a culture where everyone is welcome – our tight-knit community \
      is driven by our passion for social good.',
  },
];

export default function OurValues({ id }) {
  const valuesObject = values.map((item, index) => (
    <div className="value-container">
      <ValuesTemplate image={item.image} title={item.title} text={item.text} />
    </div>
  ));

  return (
    <div className="container-fluid home-section" id={id}>
      <Container className="values-container">
        <div>
          <h1 className="section-heading">Core Values</h1>
        </div>
        <div className="values">{valuesObject}</div>
      </Container>
    </div>
  );
}

OurValues.propTypes = {
  id: PropTypes.string.isRequired,
};
