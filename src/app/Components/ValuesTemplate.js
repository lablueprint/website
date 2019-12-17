import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const containerStyle = {
  paddingTop: 40,
};

const titleStyle = {
  fontWeight: 'bold',
  paddingTop: 10,
};

const textStyle = {
  fontSize: '0.9em',
};

export default function Value({ image, title, text }) {
  return (
    <div style={containerStyle}>
      <Image src={image} width="100" heigh="100" fluid />
      <div style={titleStyle}>{title}</div>
      <div style={textStyle}>{text}</div>
    </div>
  );
}

Value.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
