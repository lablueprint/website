import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function SectionUnorderedList({ className, children }) {
  const sectionClass = ClassNames(className, 'container-fluid', 'section-unordered-list');

  return (
    <ul
      className={sectionClass}
    >
      {children}
    </ul>
  );
}

SectionUnorderedList.defaultProps = {
  className: '',
};

SectionUnorderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};
