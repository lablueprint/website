import React from 'react';
import { Container, Image } from 'react-bootstrap';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';

import TimelineImage from '../../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    heading: 'Outreach',
    body: (<div>
      Before the start of Fall quarter (August/September), we will be conducting outreach to find
      our yearlong partners! If your non-profit is interested in an application, free of charge,
      email us at <a href="mailto: team@lablueprint.org">team@lablueprint.org</a>!
    </div>),
  },
  {
    heading: 'Scoping Call',
    body: (<div>
      After connecting, our team will set up a call to learn more about your non-profit’s technical
      goals. We are dedicated to learning about your organization’s current approach to driving
      social good and how we might help you.
    </div>),
  },
  {
    heading: 'Non-profit Project Proposal Application',
    body: (<div>
      After our scoping call, we ask you to fill out this project proposal <a href="https://airtable.com/shrlUDcvtvksS5b3h">application</a> by
      <strong> September 16</strong>. Our team is committed to answering any questions or set up additional meetings to support you.
    </div>),
  },
  {
    heading: 'Deliberation',
    body: (<div>
      Our executive team and project leads will read through your project proposals and select
      the three applications we feel we can best support. We may also contact each nonprofit for
      additional information before continuing to the next step.
    </div>),
  },
  {
    heading: 'Development',
    body: (<div>
      Our partnership has been initialized! Project development begins in October. Each non-profit
      will have a team of 2 project leads, 4-6 developers, and 2-3 designers dedicated to your project.
      Project leads will be in contact with your team regularly to ensure our application best captures
      your team’s vision.
    </div>),
  },
  {
    heading: 'Project handoff',
    body: (<div>
      After many iterations of user testing, development, and bug-amelioration, we will hand off our
      application to you. Our team is committed to making the handoff process as seamless as possible
      by providing your team detailed documentation and guidance on project maintenance.
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
