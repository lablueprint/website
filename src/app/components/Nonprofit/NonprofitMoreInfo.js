import React from 'react';
import { Container, Card} from 'react-bootstrap';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';
// import SectionSubtitle from '../SectionSubtitle';
import SectionParagraph from '../SectionParagraph';

import teapot from '../../assets/images/nonprofits-demoday/teapot-gardens.PNG';
import eo from '../../assets/images/nonprofits-demoday/end-overdose.PNG';
import uw from '../../assets/images/nonprofits-demoday/united-way.PNG';

/* eslint-disable */
export default function NonprofitMoreInfo() {
  return (
    <SectionContainer className="off-white">
      <Container>
        <SectionHeading>Want to learn more about us?</SectionHeading>

        <SectionParagraph>
          Find more information about our past projects on our {" "}
          <a href="/projects">Projects Page</a>!
        </SectionParagraph>


         <SectionParagraph>Sneak Peak into last year's demo day! </SectionParagraph>
          <div className="demo-day-card-deck">
              <Card className="demo-day-card">
                  <Card.Img src={eo} alt="End Overdose" />
                  <Card.Body>
                      <Card.Title>End Overdose</Card.Title>
                  </Card.Body>
              </Card>
              <Card className="demo-day-card">
                  <Card.Img src={teapot} alt="Teapot Gardens" />
                  <Card.Body>
                      <Card.Title>Teapot Gardens</Card.Title>
                  </Card.Body>
              </Card>
              <Card className="demo-day-card">
                  <Card.Img src={uw} alt="United Way" />
                  <Card.Body>
                      <Card.Title>United Way</Card.Title>
                  </Card.Body>
              </Card>
          </div>
        {/* <Button size="lg" href="/contact">
          Work with us
        </Button> */}
      </Container>
    </SectionContainer>
  );
}
