import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function PageHeader({ className, title, render }) {
  const headerClass = ClassNames(className, 'page-header', 'background');

  return (
    <div className={headerClass}>
      <div className="container-fluid py-5 content">
        <Container>
          <Fade>
            <div className="title">
              {title}
            </div>
            <div className="body">
              {render()}
            </div>
          </Fade>
        </Container>
      </div>
    </div>
  );
}

PageHeader.defaultProps = {
  className: '',
};

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
