import React from 'react';
import { Image } from 'react-bootstrap';

import TimelineImage from '../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    heading: 'Applications Open!',
    date: 'Oct 5',
    body: (<div>
      Applications will open <b>Week 1 of Fall Quarter</b>. Sign up for our mailing list and check
      out our <a href="https://facebook.com/lablueprint">Facebook</a> and <a
      href="https://instagram.com/lablueprint">Instagram</a> to stay updated!
    </div>),
  },
  {
    heading: 'Infosessions',
    date: 'Oct 13 & Oct 15 8 – 9:30 PM',
    body: (<div>
      <b>Learn more about our club and our projects during our infosessions!</b> During this time,
      we will be presenting about what you can expect when you join Blueprint and ask any questions
      you may have.
    </div>),
  },
  {
    heading: 'Applications Due',
    date: 'Oct 16 11:59 PM',
    body: (<div>
      The application includes <b>2 short questions</b> to help us understand your background and
      your reasons for joining Blueprint. The deadline to turn in applications is <b>Oct 16 11:59
      PM.</b> Decisions will be released on <b>Oct 18 by 11:59 PM.</b>
    </div>),
  },
  {
    heading: 'Interviews',
    date: 'Oct 20 - 23',
    body: (<div>
      An interview to learn more about your background and your experiences. This will be an
      opportunity to <b>show what you've done in the past and your ability to problem solve.
      </b> Invited candidates will be emailed to sign up for an interview slot.
    </div>),
  },
  {
    heading: 'Chat with us',
    date: 'Oct 27 - 30',
    body: (<div>
      Let's chat! <b>We will send out invites on Oct 25 to schedule a time to chat.</b> This will
      be a casual conversation between you and some of our members. We want to learn more about you
      and answer any more questions you may have!
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
