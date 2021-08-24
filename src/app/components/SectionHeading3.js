import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionHeading3({ className, children }) {
  const sectionClass = ClassNames(className, 'mt-5', 'mb-4', 'section-heading-3');

  return (
    <h3 className={sectionClass}>
      {children}
    </h3>
  );
}

SectionHeading3.defaultProps = {
  className: '',
};

SectionHeading3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
