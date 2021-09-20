import React from 'react';
import { Image } from 'react-bootstrap';

import TimelineImage from '../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    heading: 'Applications Open',
    date: 'September 20',
    body: (<div>
      Applications are <a href="https://bit.ly/LABlueprintMemberAppFall21">open</a>! Follow our <a href="https://facebook.com/lablueprint">
      Facebook</a> and <a href="https://instagram.com/lablueprint">Instagram</a> to stay updated with all things recruitment.
    </div>),
  },
  {
    heading: 'Infosessions',
    date: 'Oct 5th and Oct 6 (7 - 8 PM PST)',
    body: (<div>
      Learn more about our club and our projects during our infosessions! We will be talking about what you can expect when you join Blueprint and answer any questions you may have.
    </div>),
  },
  {
    heading: 'Applications Due',
    date: 'Oct 8 (11:59 PM PST)',
    body: (<div>
      The application includes <b>2 short questions</b> to help us understand your background and your motivations for joining Blueprint. The deadline to turn in applications is <b>Oct 8 11:59 PM PST</b>. Decisions will be released on <b>Oct 10 by 11:59 PM PST</b>.
    </div>),
  },
  {
    heading: 'Interviews',
    date: 'Oct 11 - 15',
    body: (<div>
     An interview to learn more about your background and your experiences. This will be an opportunity to <b>show your passion for social good and ability to problem solve</b>. Invited candidates will be emailed to sign up for an interview slot.
    </div>),
  },
  {
    heading: 'Chat with us',
    date: 'Oct 18 - 21',
    body: (<div>
      Let’s chat! We will send out invites on Oct 17 to schedule a time to talk. At Blueprint, we want to know what inspires you most, allow you to meet our team, and answer any questions you may have!
    </div>),
  },
];
/* eslint-enable */

export default function Timeline() {
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
            <div className="timeline-date">
              {timelineItem.date}
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
    <div className="timeline">
      {timelineItems}
    </div>
  );
}
