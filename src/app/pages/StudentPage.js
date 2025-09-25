import React from "react";
import Fade from "react-reveal";
import { Button } from "react-bootstrap";

import PageHeader from "../components/PageHeader";
import ApplicationProcess from "../components/ApplicationProcess";
import StudentFAQ from "../components/StudentFAQ";
import MailingListButton from "../components/MailingListButton";

import studentImage from "../assets/images/headers/for-students-24-25.png";

import SectionSubtitle from "../components/SectionSubtitle";

export default function StudentPage() {
  return (
    <>
      <PageHeader
        className="students"
        title="For Students"
        render={() => (
          <>
            <SectionSubtitle>
              Joining Blueprint is a great way to give back to your community.
              Help us build our applications and work with nonprofits!
            </SectionSubtitle>
            <SectionSubtitle className="sign-up mb-3">
              {/* Applications will open in Fall 2025. Fill out our interest form to stay up to date
              with our upcoming events! */}
              Applications are now open!
            </SectionSubtitle>
            <Button className="outline-white" href="https://airtable.com/appHdhMiGXimMzZL9/shrMi7lR1LE6nEjjf">
              2025-26 Application
            </Button>
          </>
        )}
        image={studentImage}
        imageAlt="Blueprint 2025 end of year banquet"
        imageClass="students-image"
      />
      <Fade>
        <ApplicationProcess />
      </Fade>
      <div id="FAQ">
        <Fade>
          <StudentFAQ />
        </Fade>
      </div>
      {/* <div id="Apply">
        <Fade>
          <MailingListButton />
        </Fade>
      </div> */}
    </>
  );
}
