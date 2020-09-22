import React from 'react';
import { Container } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import SectionHeading from '../components/SectionHeading';
import SectionSubtitle from '../components/SectionSubtitle';

export default function StudentPage() {
  return (
    <>
      <PageHeader
        className="students"
        title="For Students"
        render={() => 'Join the Blueprint team and help us build technology for social good!'}
      />
      <SectionContainer className="students">
        <Container className="mb-5 text-center">
          <SectionHeading>Applications</SectionHeading>

          <SectionSubtitle>
            Applications for Fall Quarter will be opening up week 1 of Fall
            Quarter. Check back later!
          </SectionSubtitle>
        </Container>
      </SectionContainer>
    </>
  );
}
