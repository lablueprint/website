import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionHeading2({ className, children }) {
  const sectionClass = ClassNames(className, 'mt-5', 'mb-4', 'section-heading-2');

  return (
    <h2 className={sectionClass}>
      {children}
    </h2>
  );
}

SectionHeading2.defaultProps = {
  className: '',
};

SectionHeading2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
