import React from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  minHeight: '50vh',
  color: '#7e8893',
  padding: '100px 0 100px 0',
};

export default function SectionContainer({ id, bg, children }) {
  const backgroundColor = bg === 'dark' ? '#f8f8f8' : 'white';

  return (
    <div
      className="container-fluid"
      id={id}
      style={{ ...containerStyle, backgroundColor }}
      bg={bg}
    >
      {children}
    </div>
  );
}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
