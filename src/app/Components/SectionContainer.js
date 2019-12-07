import React from 'react';

export default function SectionContainer(props) {
  const backgroundColor = props.bg === 'dark' ? '#f8f8f8' : 'white';
  return (
    <div className='container-fluid' id={props.id} style={{...containerStyle, backgroundColor: backgroundColor}} bg={props.bg}>
      {props.children}
    </div>
  );
}

const containerStyle = {
  minHeight: '50vh',
  color: '#7e8893',
  padding: '100px 0 100px 0'
};

