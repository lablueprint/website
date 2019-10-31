import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';

export default function MemberProfile(props) {
  return (
    <div style={containerStyle}>
      <Image
        src={props.image}
        width="200"
        height="200"
        fluid
        roundedCircle  />
      <div style={nameStyle}>{props.name}</div>
      <div style={positionStyle}>{props.position}</div>
      <a href={props.linkedInURL}>
        <FaLinkedinIn/>
      </a>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  paddingTop: 40
}

const nameStyle = {
  fontWeight: 'bold',
  paddingTop: 10,
  // color: '#187be5'
}

const positionStyle = {
  fontSize: '0.8em'
}
