import React from 'react';

export default function SectionParagraph(props) {
  return (
    <p style={pStyle}>
      {props.children}
    </p>
  );
}

const pStyle = {
  fontSize: '1.2em',
  fontFamily: 'Roboto'
};
