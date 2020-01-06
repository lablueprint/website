import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionSubtitle({ className, children }) {
  const sectionClass = ClassNames(className, 'section-subtitle');

  return <div className={sectionClass}>{children}</div>;
}

SectionSubtitle.defaultProps = {
  className: '',
};

SectionSubtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};
