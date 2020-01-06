import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from '../components/SectionContainer';
import PageHeader from '../components/PageHeader';

export default function StudentPage() {
  return (
    <>
      <PageHeader
        title="Join the Team"
        render={() => 'Help us build our tools!'}
      />
      <SectionContainer className="not-found-page">
        <Container className="mb-5 text-center">
          We are Blueprint, a organization dedicated to social good.
          <a href="https://airtable.com/shrru3kJPm50g5MDO">Applications are currently open for this Winter!</a>
        </Container>
      </SectionContainer>
    </>
  );
}
