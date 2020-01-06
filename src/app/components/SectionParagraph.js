import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionParagraph({ className, children }) {
  const sectionClass = ClassNames(className, 'section-paragraph');

  return <p className={sectionClass}>{children}</p>;
}

SectionParagraph.defaultProps = {
  className: '',
};

SectionParagraph.propTypes = {
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
