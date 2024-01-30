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
          We're looking for nonprofit partnerships during <strong>Summer 2024</strong> for the 2024-2025 school year!
          <br/>
          Interested in working with us? We'd love to hear from you! Send us an email at <a href="mailto:outreach@lablueprint.org">outreach@lablueprint.org</a>.
        </SectionParagraph>
        
        {/* <Button size="lg" href="/contact">
          Work with us
        </Button> */}
      </Container>
    </SectionContainer>
  );
}
