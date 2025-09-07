import React from 'react';
import { Container } from 'react-bootstrap';

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
          We're looking for nonprofit partnerships during <strong>Summer 2026</strong> for the 2026-2027 school year!
          <br/>
          Interested in working with us? We'd love to hear from you! Send us an email at <a href="mailto:outreach@lablueprint.org">outreach@lablueprint.org </a>
          or fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSexzlxUIVmlR24Jr7x7RUfbTj6g4JOzd45LzNVeUCphPMydCw/viewform">interest form.</a>
        </SectionParagraph>
        
        {/* <Button size="lg" href="/contact">
          Work with us
        </Button> */}
      </Container>
    </SectionContainer>
  );
}
