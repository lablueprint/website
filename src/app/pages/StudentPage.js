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
              Applications will open in Fall 2025. Fill out our interest form to stay up to date
              with our upcoming events!
            </SectionSubtitle>
            <Button className="outline-white" href="https://airtable.com/appJz11HEgtdvpB0O/shraY91Uf7Mr5JMjN?fbclid=PAZXh0bgNhZW0CMTEAAaeBCft2apOk60cnNvEhYmgXP3rEko9C4fNm9-Shk_1Y93PlhdZ26-sUX_HODw_aem_JvCwGY7XFyRhbIhpBnQiQQ">
              2025-26 Interest Form
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
