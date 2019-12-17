import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionContainer({ id, bg, children }) {
  const className = ClassNames('container-fluid', 'section-container', {
    'off-white': bg === 'off-white',
  });

  return (
    <div
      className={className}
      id={id}
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
