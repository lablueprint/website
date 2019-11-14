import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from '../Components/ContactForm';

export default function ContactPage() {
  return (
    <div style={bgStyle}>
      <Fade bottom>
        <ContactForm />
      </Fade>
    </div>
  );
}

const bgStyle = {
  paddingBottom: 100
};