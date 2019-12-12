import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
  color: 'black',
  fontFamily: 'Questrial',
  fontWeight: 'bold',
};

export default function SectionHeading(props) {
  const { children } = props;

  return (
    <h1 className="my-4" style={headerStyle}>
      {children}
    </h1>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.element.isRequired,
};
