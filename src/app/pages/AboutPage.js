import React from 'react';
import { Fade } from 'react-reveal';

import MeetTheTeam from '../components/MeetTheTeam';
import Alumni from '../components/Alumni';
import WhereWeveBeen from '../components/WhereWeveBeen';
import PageHeader from '../components/PageHeader';
import OurValues from '../components/OurValues';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        className="about"
        title="Meet Blueprint"
        // eslint-disable-next-line no-multi-str
        render={() => "We're a group of friendly folks at the University of California, Los Angeles \
        dedicated to building technology for the greater good."}
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
