import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

export default function ApplicationProcess() {
  return (
    <SectionContainer className="application-process">
      <Container className="application-process-container mb-5 text-center">
        <SectionHeading className="application-process-heading">Application Process</SectionHeading>
        <Timeline />
      </Container>
    </SectionContainer>
  );
}
