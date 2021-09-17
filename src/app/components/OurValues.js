import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';
import ValuesTemplate from './ValuesTemplate';

import darkBlueSmiley from '../assets/images/shapes/dark-blue-smiley.png';
import lightBlueSmiley from '../assets/images/shapes/light-blue-smiley.png';
import pinkSmiley from '../assets/images/shapes/pink-smiley.png';

const values = [
  {
    image: darkBlueSmiley,
    title: 'Innovation',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint continuously innovates to make sure our projects, workshops, and events are unique. \
      Our creative developments are fueled by our enthusiasm and our eagerness to learn.',
  },
  {
    image: lightBlueSmiley,
    title: 'Quality',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint strives for the best quality in our projects, members, and workshops. We meticulously \
      choose projects that create a lasting impact.',
  },
  {
    image: pinkSmiley,
    title: 'Community',
    text:
      // eslint-disable-next-line no-multi-str
      'Blueprint strives to create a culture where everyone is welcome – our tight-knit community \
      is driven by our passion for social good.',
  },
];

export default function OurValues() {
  const valuesObject = values.map((item) => (
    <ValuesTemplate
      key={item.title}
      image={item.image}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <SectionContainer className="our-values">
      <Container className="values-container">
        <div className="title">
          <h1 className="section-heading">Core Values</h1>
        </div>
        <div className="values">{valuesObject}</div>
      </Container>
    </SectionContainer>
  );
}
