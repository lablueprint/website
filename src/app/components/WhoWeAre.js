import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionSubtitle from './SectionSubtitle';
import SectionParagraph from './SectionParagraph';

export default function WhoWeAre() {
  return (
    <SectionContainer className="who-we-are">
      <Container>
        <SectionHeading>About</SectionHeading>

        <SectionSubtitle>
          Blueprint strives to make technology accessible and useful for
          those who assist communities and promote public welfare.
        </SectionSubtitle>

        <SectionParagraph>
          Blueprint is committed to building and promoting tech for
          social good&mdash;free of charge. We collaborate with nonprofit
          organizations in Southern California to build mobile and desktop
          applications.
        </SectionParagraph>

        {/* eslint-disable */}
        <SectionParagraph className="last">
          Blueprint is a multinational organization founded in 2012 at the <a href="https://www.calblueprint.org">University of California, Berkeley</a>.
          Our UCLA chapter is the third established chapter after the <a href="https://www.uwblueprint.org">University of Waterloo</a>.
        </SectionParagraph>
        {/* eslint-enable */}

        <h3 className="subtitle-blue">
          <a className="link" href="/about">
            Read More...
          </a>
        </h3>
      </Container>
    </SectionContainer>
  );
}
