import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';
import PropTypes from 'prop-types';

const containerStyle = {
  textAlign: 'center',
  paddingTop: 40,
};

const nameStyle = {
  fontWeight: 'bold',
  paddingTop: 10,
  // color: '#187be5'
};

const positionStyle = {
  fontSize: '0.8em',
};

export default function MemberProfile({
  image, name, position, linkedInURL,
}) {
  return (
    <div style={containerStyle}>
      <Image src={image} width="200" height="200" fluid roundedCircle />
      <div style={nameStyle}>{name}</div>
      <div style={positionStyle}>{position}</div>
      <a href={linkedInURL}>
        <FaLinkedinIn />
      </a>
    </div>
  );
}

MemberProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedInURL: PropTypes.string.isRequired,
};
