import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionHeading({ className, children }) {
  const sectionClass = ClassNames(className, 'mt-5', 'section-heading');

  return (
    <h1 className={sectionClass}>
      {children}
    </h1>
  );
}

SectionHeading.defaultProps = {
  className: '',
};

SectionHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
