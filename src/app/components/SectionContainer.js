import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionContainer({ className, children }) {
  const sectionClass = ClassNames(className, 'container-fluid', 'section-container');

  return (
    <div
      className={sectionClass}
    >
      {children}
    </div>
  );
}

SectionContainer.defaultProps = {
  className: '',
};

SectionContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};
