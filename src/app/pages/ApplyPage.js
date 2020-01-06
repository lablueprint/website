import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NonprofitPage() {
  return (
    <div className="container-fluid not-found-page">
      <Container className="mb-5 text-center">
        <Link to="/students">STUDENTS</Link>
        <Link to="/nonprofits">Nonprofits</Link>
      </Container>
    </div>
  );
}
