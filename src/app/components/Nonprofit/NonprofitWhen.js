import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';
import SectionSubtitle from '../SectionSubtitle';
import SectionParagraph from '../SectionParagraph';

export default function NonprofitWhen() {
  return (
    <SectionContainer className="off-white">
      <Container>
        <SectionHeading>When are we looking for new nonprofits?</SectionHeading>

        <SectionSubtitle>
          For Fall 2021:
        </SectionSubtitle>

        <SectionParagraph>
          We are reaching out to nonprofits
          <strong> RIGHT NOW</strong>
          !
          <br />
          Our goal is to recruit multiple nonprofits before end of August.
          <br />
          Feel free to send us an
          <a href="team@lablueprint.org"><nobr> email </nobr></a>
          if you are interested, and we will respond to you as fast as possible.
        </SectionParagraph>

      </Container>
    </SectionContainer>
  );
}
