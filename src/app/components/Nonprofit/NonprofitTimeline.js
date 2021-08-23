import React from 'react';
import { Container, Image } from 'react-bootstrap';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';

import TimelineImage from '../../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    heading: 'Reaching Out',
    body: (<div>
      Before the start of Fall quarter (July/August), we will be contacting various non-profits to
      find our yearlong partners!
      <br />
      If you are interested to partner with us, please feel free to email us at <a href="mailto: team@lablueprint.org">team@lablueprint.org</a>!
      We also will love to shout out any non-profit organizations on our <a href="https://instagram.com/lablueprint">
      social media</a>. If you are interested, fill this <a href="https://airtable.com/shr61J2kygF9LUmMl">
      form</a> out!
    </div>),
  },
  {
    heading: 'Scoping Call',
    body: (<div>
      After initalizing interest, we will get on a call to scope out the project together.
      This is the perfect place to ask any question on both side and start examining what application
      we will be building. The general timeline will be set together, so we can sketch possible
      features for the app!
    </div>),
  },
  {
    heading: 'Non-profit Application',
    body: (<div>
      The <a href="https://airtable.com/shrlUDcvtvksS5b3h">application</a> includes contact information,
      project scoping, and other considerations for our partnership. This should be filled soon after our
      scoping call!
    </div>),
  },
  {
    heading: 'Deliberation',
    body: (<div>
      As a whole organization, we will discuss all the applications and see which ones will be
      the best fit for our partnership! This will include criteria mentioned above and also
      individual interest from our project leads. We may also contact each nonprofit for additional
      information before continuing to the next step!
    </div>),
  },
  {
    heading: 'Announcement',
    body: (<div>
      Soon after our deliberation, we will be announcing our partnerships to everyone!
      We will also schedule more calls to strength our communications in order to
      head start our partnership.
      <br />
      Our project leads will also get to show interests in
      which projects they are interested in leading for this upcoming year!
    </div>),
  },
  {
    heading: 'Development',
    body: (<div>
      After our recruitment season, we will begin our project development! This will
      happen after our student recruitment (September), so a project lead with a full
      team (mix of developers and designers) will be assigned to complete the project!
      There should be a <strong>constant</strong> communication setup between the person
      of contact from the non-profit and the project lead from Blueprint.
    </div>),
  },
  {
    heading: 'Completion & Next Step',
    body: (<div>
      After multiple rounds of scrum sprints and user testing, we will be deploying the
      project <strong>live</strong>! Before that We will go through rounds of bug splash to
      make sure our work is production-ready. We will finish up a detailed documentation on
      how to maintain and even expand the application for the future. A team or an individual
      from the non-profit should be assigned as the owner or maintainer for the application.
    </div>),
  },
];
/* eslint-enable */

export default function NonprofitTimeline() {
  const timelineItems = timeline.map((timelineItem, index) => (
    <div key={JSON.stringify(timelineItem)}>
      <div className="timeline-row">
        <div className="timeline-number">
          {(index + 1 < 10) ? `0${(index + 1)}` : index + 1}
        </div>
        <div className="timeline-body-container">
          <div className="timeline-heading-container">
            <div className="timeline-heading">
              {timelineItem.heading}
            </div>
          </div>
          <div className="timeline-body">
            {timelineItem.body}
          </div>
        </div>
      </div>
      {index !== timeline.length - 1 && <Image src={TimelineImage} className="timeline-line" />}
    </div>
  ));

  return (
    <SectionContainer className="application-process">
      <Container className="application-process-container mb-5 text-center">
        <SectionHeading className="application-process-heading">Nonprofit Collaboration</SectionHeading>
        <div className="timeline">
          {timelineItems}
        </div>
      </Container>
    </SectionContainer>
  );
}
