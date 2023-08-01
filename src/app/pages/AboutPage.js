import React from 'react';
import { Fade } from 'react-reveal';

import MeetTheTeam from '../components/MeetTheTeam';
import Alumni from '../components/Alumni';
import WhereWeveBeen from '../components/WhereWeveBeen';
import PageHeader from '../components/PageHeader';
import OurValues from '../components/OurValues';

import SectionSubtitle from '../components/SectionSubtitle';

import about from '../assets/images/headers/meet-blueprint-23-24.png';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        className="about"
        title="Meet Blueprint"
        // eslint-disable-next-line no-multi-str
        render={() => (
          <SectionSubtitle>
            We&apos;re a group of friendly folks at the University of California, Los Angeles
            dedicated to building technology for the greater good.
          </SectionSubtitle>
        )}
        image={about}
        imageAlt="LA Blueprint at the 2021 End of the Year Banquet"
        imageClass="about-image"
      />
      <Fade>
        <OurValues />
      </Fade>
      <MeetTheTeam />
      <Alumni />
      <WhereWeveBeen />
    </>
  );
}
