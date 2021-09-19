import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function PageHeader({
  className, title, subtitle, render, image, imageAlt, imageClass,
}) {
  const headerClass = ClassNames(className, 'page-header', 'background');

  return (
    <div className={headerClass}>
      <div className="container-fluid content">
        <Container>
          <Fade>
            <div className="content-container">
              <div className="text">
                <div className="title">
                  {title}
                </div>
                <div className="subtitle">
                  {subtitle}
                </div>
                <div
                  className="body"
                  style={{ width: '100%' }}
                >
                  {render()}
                </div>
              </div>
              <img
                className={imageClass}
                src={image}
                alt={imageAlt}
              />
            </div>
          </Fade>
        </Container>
      </div>
    </div>
  );
}

PageHeader.defaultProps = {
  className: '',
  subtitle: '',
  image: '',
  imageAlt: '',
  imageClass: '',
};

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  render: PropTypes.func.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageClass: PropTypes.string,
};
