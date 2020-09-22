import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container-fluid not-found-page">
      <Container className="mb-5 text-center">
        <div className="number">404</div>
        <div>This page does not exist!</div>
        <Link to="/">Go back to homepage</Link>
      </Container>
    </div>
  );
}
