import React from 'react';
import PropTypes from 'prop-types';

export default function SectionSubtitle({ children }) {
  return <div className="subtitle">{children}</div>;
}

SectionSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
