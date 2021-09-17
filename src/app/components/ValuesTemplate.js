import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Value({ image, title, text }) {
  return (
    <div className="values-template">
      <Image src={image} width="100" heigh="auto" fluid />
      <div className="values-title">{title}</div>
      <div className="values-text">{text}</div>
    </div>
  );
}

Value.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
