import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionSubtitle from './SectionSubtitle';
import SectionParagraph from './SectionParagraph';

export default function WhoWeAre({ id, bg }) {
  return (
    <SectionContainer id={id} bg={bg}>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
            <SectionHeading>About</SectionHeading>

            <SectionSubtitle>
              Blueprint strives to make technology accessible and useful for
              those who assist communities and promote public welfare.
            </SectionSubtitle>

            <SectionParagraph>
              LA Blueprint is committed to building and promoting tech for
              social good&mdash;free of charge. We collaborate with nonprofit
              organizations in Southern California to build websites, mobile
              applications, and data analytical tools.
            </SectionParagraph>

            {/* eslint-disable */}
            <SectionParagraph>
              Blueprint is a multinational organization founded in 2012 at the <a href="https://www.calblueprint.org">University of California, Berkeley</a>.
              We are the third established chapter after the <a href="https://www.uwblueprint.org">University of Waterloo</a>.
            </SectionParagraph>
            {/* eslint-enable */}
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  );
}

WhoWeAre.propTypes = {
  id: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
