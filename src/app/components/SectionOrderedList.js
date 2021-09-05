import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionOrderedList({ className, children }) {
  const sectionClass = ClassNames(className, 'container-fluid', 'section-ordered-list');

  return (
    <ol
      className={sectionClass}
    >
      {children}
    </ol>
  );
}

SectionOrderedList.defaultProps = {
  className: '',
};

SectionOrderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};
