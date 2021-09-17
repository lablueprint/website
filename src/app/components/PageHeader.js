import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export default function PageHeader({
  className, title, render, image, imageAlt, imageClass,
}) {
  const headerClass = ClassNames(className, 'page-header', 'background');

  /**
   * OK, now that I'm done with the front page (kind of - I still haven't
   * figured out how to wrap the "Tech for \n Social Good").
   *
   * I guess another thing I would like to try is to check what the website looks
   * like "on mobile" or with reduced screen width.
   *
   * I feel like at it's widest, it should definitely do "Tech for \n Social Good"
   * and then adjust from there. Wrap however it needs to. lol.
   *
   * And then after a certain width, the picture should just disappear.
   *
   * To finish up the Home page, I need to place all the CSS code in the scss file rather
   * than keeping it inline.
   *
   * 1. Picture disappears after a screenwidth threshold.
   */

  return (
    <div className={headerClass}>
      <div className="container-fluid content">
        <Container>
          <Fade>
            <div className="content-container">
              <div
                className="text"
              >
                <div className="title">
                  {title}
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
  image: '',
  imageAlt: '',
};

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};
