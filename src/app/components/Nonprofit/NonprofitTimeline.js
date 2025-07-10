import React from "react";
import { Container, Image } from "react-bootstrap";

import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";

import TimelineImage from "../../assets/images/students/timeline.svg";

/* eslint-disable */
const timeline = [
  {
    heading: "Outreach",
    body: (
      <div>
        Before the start of our fall quarter around{" "}
        <strong style={{ color: "#3599fd" }}>June / July</strong>, we will be
        conducting this outreach to find our yearlong partners!
        <br />
        If your nonprofit is interested in an application, free of charge, please fill out the {" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYYQWWfUxok5SVLs611DKgqiI5Ie80shvVAEM-cDellmRlrg/viewform">interest form</a>.
        Also, feel free to reach out to us with any questions via email at {" "}
        <a href="mailto:outreach@lablueprint.org">outreach@lablueprint.org</a>!
      </div>
    ),
  },
  {
    heading: "Informational Call",
    body: (
      <div>
        If you'd like to learn more about us, please respond to our outreach
        email anytime between{" "}
        <strong style={{ color: "#3599fd" }}>July 14th - August 6th</strong>.
        Our exec team will schedule a quick 30 minute informational call so we
        can get to know each other the better! We'll also be able to answer any
        questions you have about the application process and our organization.
      </div>
    ),
  },
  {
    heading: "Written Application",
    body: (
      <div>
        If you decide that you're interested in working with us and we agree
        that Blueprint has the ability to fit your needs, please submit an
        application <a href="/contact">here</a> by{" "}
        <strong style={{ color: "#3599fd" }}> August 8th</strong>. This part of
        our process helps us understand how Blueprint can best serve your
        organization. You'll have the chance to fully explain how we can help
        you, identify any points of need in your current operations, and expand
        on what you'd like us to build for you. If your proposed project sounds
        like something we can create, we'll be in touch for a final interview.
      </div>
    ),
  },
  {
    heading: "Final Interview",
    body: (
      <div>
        Between{" "}
        <strong style={{ color: "#3599fd" }}>Aug 11th - Aug 22nd</strong>, the
        final interview will be a meeting with members of our exec team and
        project leads. Together, we'll go into more detail on your proposed
        project, discuss how it can be designed to best fit your needs, and
        really get to know what we can do for you.
      </div>
    ),
  },
  {
    heading: "Decisions Released",
    body: (
      <div>
        We’ll reach out by{" "}
        <strong style={{ color: "#3599fd" }}> August 24 </strong> and let you
        know if your organization has been selected to work with Blueprint! If
        chosen, your nonprofit will have the opportunity to work with us on a
        project through the course of our academic year (September - June). Our
        project leads will decide which project they’re most passionate about
        and best suited for, and will work with you through September to
        finalize the plans for your project.
      </div>
    ),
  },
];
/* eslint-enable */

export default function NonprofitTimeline() {
  const timelineItems = timeline.map((timelineItem, index) => (
    <div key={JSON.stringify(timelineItem)}>
      <div className="timeline-row">
        <div className="timeline-number">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </div>
        <div className="timeline-body-container">
          <div className="timeline-heading-container">
            <div className="timeline-heading">{timelineItem.heading}</div>
          </div>
          <div className="timeline-body">{timelineItem.body}</div>
        </div>
      </div>
      {index !== timeline.length - 1 && (
        <Image src={TimelineImage} className="timeline-line" />
      )}
    </div>
  ));

  return (
    <SectionContainer className="application-process">
      <Container className="application-process-container mb-5 text-center">
        <SectionHeading className="application-process-heading">
          Nonprofit Collaboration Timeline
        </SectionHeading>
        <div className="timeline">{timelineItems}</div>
      </Container>
    </SectionContainer>
  );
}
