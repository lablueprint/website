import React from 'react';
import PropTypes from 'prop-types';

export default function SectionSubtitle(props) {
  const { children } = props;

  return <div className="subtitle">{children}</div>;
}

SectionSubtitle.propTypes = {
  children: PropTypes.element.isRequired,
};
