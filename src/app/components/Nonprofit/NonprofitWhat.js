import React from 'react';
import { Container } from 'react-bootstrap';

import {
  FaHeart, FaCrosshairs, FaTools, FaCarAlt,
} from 'react-icons/fa';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';
import SectionSubtitle from '../SectionSubtitle';
import SectionParagraph from '../SectionParagraph';

export default function NonprofitWhat() {
  const iconStyles = { marginRight: 10 };

  return (
    <SectionContainer className="off-white">
      <Container>
        <SectionHeading>What are we looking for?</SectionHeading>

        <SectionSubtitle>
          <FaCarAlt style={iconStyles} />
          Impact
        </SectionSubtitle>

        <SectionParagraph>
          Will the project be impactful for the nonprofit? It is important for us to
          evaluate how transformative this application is to your non-profit’s end-to-end processes.
        </SectionParagraph>

        <SectionSubtitle>
          <FaCrosshairs style={iconStyles} />
          Scope
        </SectionSubtitle>

        <SectionParagraph>
          Is this project feasible given our one year time frame? Dreaming big is great, but we
          value delivering results over making empty promises. Our team is dedicated to working
          alongside you in scoping 1-2 impactful features that best support your non-profit.
        </SectionParagraph>

        <SectionSubtitle>
          <FaTools style={iconStyles} />
          Maintainability
        </SectionSubtitle>

        <SectionParagraph>
          Will the project be maintained after it is delivered? We understand that non-profits
          may be restricted by limited resources, so it is our intention to deliver a project as
          bug-free as possible to our partner.
        </SectionParagraph>

        <SectionSubtitle>
          <FaHeart style={iconStyles} />
          Commitment
        </SectionSubtitle>

        <SectionParagraph>
          Does your non-profit have a demonstrated passion in actualizing this project? Consistent
          communication with our team throughout the development process ensures that your vision
          and our team’s efforts are aligned.
        </SectionParagraph>

      </Container>
    </SectionContainer>
  );
}
