import React from 'react';
import { Image } from 'react-bootstrap';

import TimelineImage from '../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    // heading: 'Applications Are Currently Open!',
    heading: 'Applications Open',
    // date: 'Sept 19',
    // body: (<div>
    //   Applications for our Fall 2023 recruitment are open! You can find a link to our application on our <a href="https://linktr.ee/lablueprint">Linktree</a>. Fill out our recruitment interest form, and check our <a href="https://facebook.com/lablueprint">Facebook</a> and <a href="https://instagram.com/lablueprint">Instagram</a> out to be notified about everything recruitment related!
    // </div>),
    body: (<div>
      Applications for our Fall 2023 recruitment will open <b>Week 0</b>! Check our <a href="https://facebook.com/lablueprint">Facebook</a> and <a href="https://instagram.com/lablueprint">Instagram</a> out to be notified about everything recruitment related!
    </div>),
  },
  {
    heading: 'Infosessions',
    // date: 'Sept 27th and Sept 28',
    body: (<div>
      We will be having an online infosession on <b>Wednesday, October 4th</b>, and an in-person one on <b>Thursday, October 5th</b>! Learn more about our club and our projects during these infosessions! We will be talking about what you can expect when you join Blueprint and answer any questions you may have.
    </div>),
    // body: (<div>
    //   We will be having in-person and online infosessions in Week 1 (exact dates TBD). Learn more about our club and our projects during these infosessions! We will be talking about what you can expect when you join Blueprint and answer any questions you may have.
    // </div>),
  },
  {
    heading: 'Applications Due',
    // date: 'Sept 30 (11:59 PM PST)',
    body: (<div>
      Applications close on <b>October 6th at 11:59pm</b>! The application includes 2 short questions to help us understand you and your motivations for joining Blueprint.
    </div>),
    // body: (<div>
    //   Applications close at the end of Week 1! The application includes 2 short questions to help us understand your background and your motivations for joining Blueprint.
    // </div>),
  },
  {
    heading: 'Interviews',
    // date: 'Week 2',
    body: (<div>
      We will be inviting some applicants back for an interview to learn more about your background and your experiences. This will be an opportunity to show your passion for social good and ability to problem solve. Invited candidates will be emailed to sign up for an interview slot during <b>Week 2</b>!
    </div>),
  },
  {
    heading: 'Chat with us',
    // date: 'Week 3',
    body: (<div>
      After interviews, we will send out invites to schedule a time to talk during <b>Week 3</b>. At Blueprint, we want to know what inspires you most, allow you to meet our team, and answer any questions you may have!
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
            {/* <div className="timeline-date">
              {timelineItem.date}
            </div> */}
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
