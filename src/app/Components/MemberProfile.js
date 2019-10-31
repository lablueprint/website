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
      <div>{props.name}</div>
      <div>{props.position}</div>
      <a href={props.linkedInURL}>
        <FaLinkedinIn/>
      </a>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  padding: 30
}
