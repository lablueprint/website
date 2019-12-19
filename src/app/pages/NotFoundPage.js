import { Container } from 'react-bootstrap';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="container-fluid not-found-page">
      <Container className="mb-5 text-center">
        <div className="number">404</div>
        <div>This page does not exist!</div>
        <a href="/">Go back to homepage</a>
      </Container>
    </div>
  );
}
