import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SectionContainer from '../Components/SectionContainer';
import SectionHeading from '../Components/SectionHeading';
import SectionSubtitle from '../Components/SectionSubtitle';
import SectionParagraph from '../Components/SectionParagraph';

export default function WhoWeAre(props) {
  return (
    <SectionContainer id={props.id} bg={props.bg}>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1}}>
            <SectionHeading>
              About
            </SectionHeading>

            <SectionSubtitle>
              Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.
            </SectionSubtitle>

            <SectionParagraph>
              LA Blueprint is committed to building and promoting tech for social good&mdash;free of charge. We collaborate with nonprofit organizations in Southern California to build websites, mobile applications, and data analytical tools.
            </SectionParagraph>

            <SectionParagraph>
              Blueprint is a multinational organization founded in 2012 at the <a href='https://www.calblueprint.org'>University of California, Berkeley</a>. We are the third established chapter after the <a href='https://www.uwblueprint.org'>University of Waterloo</a>.
            </SectionParagraph>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  );
}
