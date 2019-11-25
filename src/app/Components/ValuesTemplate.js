import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Image } from 'react-bootstrap';

export default function Value(props) {
  return (
    <div style={containerStyle}>
      <Image
        src={props.image}
        width="150"
        heigh="150"
        fluid />
      <div style={titleStyle}>{props.title}</div>
      <div style={textStyle}>{props.text}</div>
    </div>
  )
}

const containerStyle = {
  paddingTop: 40
};

const titleStyle = {
  fontWeight: 'bold',
  paddingTop : 10
};

const textStyle = {
  fontSize: '0.9em'
};