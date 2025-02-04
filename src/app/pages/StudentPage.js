import React from "react";
import Fade from "react-reveal";
import { Button } from "react-bootstrap";

import PageHeader from "../components/PageHeader";
import ApplicationProcess from "../components/ApplicationProcess";
import StudentFAQ from "../components/StudentFAQ";
import MailingListButton from "../components/MailingListButton";

import studentImage from "../assets/images/headers/for-students-23-24.png";

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
              Applications are now closed. Come back in Fall 2025!
            </SectionSubtitle>
            <Button
              className="outline-white"
              size="md"
              href="https://airtable.com/appY8mDtwETX2LcL5/shrgwdaqOvjbi8FbJ"
              disabled
            >
              Check out our applications
            </Button>
            {/* <SectionSubtitle className="sign-up mb-3">
              Applications are currently closed. Fill out our interest form for more updates on
              our other initiatives!
            </SectionSubtitle>
            <Button className="outline-white" href="https://airtable.com/appNXPLX16HDPNLLY/shrjFzXLVJ0vbGCSy">
              2023-24 Interest Form
            </Button> */}
          </>
        )}
        image={studentImage}
        imageAlt="Zoom screenshot from an online social"
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
      <div id="Apply">
        <Fade>
          <MailingListButton />
        </Fade>
      </div>
    </>
  );
}
