import React from 'react';
import { Image } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function MemberProfile({
  image, name, position, linkedInURL,
}) {
  return (
    <div className="member-profile">
      <Image src={image} width="200" height="200" fluid rounded />
      <div className="name">{name}</div>
      <div className="position">{position}</div>
      {linkedInURL && (
        <a href={linkedInURL}>
          <FaLinkedinIn />
        </a>
      )}
    </div>
  );
}

MemberProfile.defaultProps = {
  linkedInURL: '',
};

MemberProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedInURL: PropTypes.string,
};
