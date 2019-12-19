import React from 'react';
import PropTypes from 'prop-types';

export default function SectionHeading({ children }) {
  return (
    <h1 className="my-4 section-heading">
      {children}
    </h1>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
