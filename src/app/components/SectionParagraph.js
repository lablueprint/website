import React from 'react';
import PropTypes from 'prop-types';

export default function SectionParagraph({ children }) {
  return <p className="section-paragraph">{children}</p>;
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
