import React from 'react';
import PropTypes from 'prop-types';

const pStyle = {
  fontSize: '1.2em',
  fontFamily: 'Roboto',
};

export default function SectionParagraph({ children }) {
  return <p style={pStyle}>{children}</p>;
}

SectionParagraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
    ),
  ]).isRequired,
};
