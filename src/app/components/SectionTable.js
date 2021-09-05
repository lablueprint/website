import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionTable({ className, children }) {
  const sectionClass = ClassNames(className, 'section-table');

  return <table className={sectionClass}>{children}</table>;
}

SectionTable.defaultProps = {
  className: '',
};

SectionTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
    ),
  ]).isRequired,
};
