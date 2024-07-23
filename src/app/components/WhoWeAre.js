import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhoWeAreImg from '../assets/images/home/who-we-are-23-24.png';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';

export default function WhoWeAre() {
  return (
    <SectionContainer className="who-we-are">
      <Container>
        <SectionHeading>Who are we?</SectionHeading>

        <div className="who-we-are container">
          {/* eslint-disable */}
          <SectionParagraph className="who-we-are body">
            <p>
              LA Blueprint is a student-run <a href='https://linktr.ee/lablueprintnonprofit'>501(c)(3) nonprofit</a> committed to building and promoting tech for social good—free of charge. We collaborate with nonprofit organizations in Southern California and beyond to build mobile and web applications. 
              <br/>
              <br/>
              Blueprint is a multinational organization founded in 2013 at the <a href="https://www.calblueprint.org">University of California, Berkeley</a>. Our UCLA chapter is the third established chapter after the <a href="https://www.uwblueprint.org">University of Waterloo</a>.
            </p>
          </SectionParagraph>
          {/* eslint-enable */}
          <div className="who-we-are imgContainer">
            <img src={WhoWeAreImg} alt="who-we-are" className="who-we-are img" />
          </div>
        </div>

        <h3 className="subtitle-blue">
          <Link to="/contact">
            <Button className="raised-button blue">
              Contact
            </Button>
          </Link>
        </h3>
      </Container>
    </SectionContainer>
  );
}
