import React from 'react';
import PropTypes from 'prop-types';

const pStyle = {
  fontSize: '1.2em',
  fontFamily: 'Roboto',
};

export default function SectionParagraph(props) {
  const { children } = props;

  return <p style={pStyle}>{children}</p>;
}

SectionParagraph.propTypes = {
  children: PropTypes.element.isRequired,
};
