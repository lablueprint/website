import React from 'react';
import { Button, Container } from 'react-bootstrap';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';
// import SectionSubtitle from '../SectionSubtitle';
import SectionParagraph from '../SectionParagraph';
/* eslint-disable */
export default function NonprofitWhen() {
  return (
    <SectionContainer className="off-white">
      <Container>
        <SectionHeading>When are we looking for new nonprofits?</SectionHeading>

        <SectionParagraph>
          We're looking for nonprofit partnerships during <strong>Summer 2023</strong> for the 2023-2024 school year!
          <br/>
          Interested in working with us? We'd love to hear from you!
        </SectionParagraph>
        
        <Button size="lg" href="/contact">
          Work with us
        </Button>
      </Container>
    </SectionContainer>
  );
}
