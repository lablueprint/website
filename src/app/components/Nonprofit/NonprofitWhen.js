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
          We're looking for nonprofit partnerships during <strong>Summer 2022</strong> for the 2022-2023 school year!
          <br/>
          Interested in working with us? We'd love to hear from you!
        </SectionParagraph>

        {/* <SectionParagraph>
          We are looking for nonprofit partnerships <strong>now</strong> for the 2021-2022 school year!
          <br/>
          Interested in working with us? We'd love to hear from you.
        </SectionParagraph> */}
        
        <Button size="lg" href="/contact">
          Work with us
        </Button>
      </Container>
    </SectionContainer>
  );
}
