import React from 'react';

export default function SectionHeading(props) {
  return (
    <h1 class='my-4' style={headerStyle}>
      {props.children}
    </h1>
  );
}

const headerStyle = {
  color: 'black',
  fontFamily: 'Questrial',
  fontWeight: 'bold'
};
