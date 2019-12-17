import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import ContactForm from '../components/ContactForm';

const bgStyle = {
  paddingBottom: 100,
};

export default function ContactPage() {
  return (
    <div style={bgStyle}>
      <ContactForm />
    </div>
  );
}
