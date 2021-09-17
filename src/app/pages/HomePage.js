import React from 'react';
import { Fade } from 'react-reveal';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import WhoWeAre from '../components/WhoWeAre';
import OurProjects from '../components/OurProjects';
import ContactButton from '../components/ContactButton';

import SectionSubtitle from '../components/SectionSubtitle';

import funShapes from '../assets/images/headers/fun-shapes.png';

export default function HomePage() {
  return (
    <>
      <PageHeader
        className="home"
        title="Tech for Social Good"
        render={() => (
          <>
            <SectionSubtitle>
              Blueprint strives to make technology accessible and useful for
              those who assist communities and promote public welfare.
            </SectionSubtitle>
            <Link to="/about">
              <Button className="outline-white" size="md">
                Learn More
              </Button>
            </Link>
          </>
        )}
        image={funShapes}
        imageAlt="Colorful shapes with smiley faces"
        imageClass="home-image"
      />
      <Fade>
        <WhoWeAre />
      </Fade>
      <Fade>
        <OurProjects />
      </Fade>
      <Fade>
        <ContactButton />
      </Fade>
    </>
  );
}
