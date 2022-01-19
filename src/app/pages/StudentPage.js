import React from 'react';
import Fade from 'react-reveal';
import { Button } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import ApplicationProcess from '../components/ApplicationProcess';
import StudentFAQ from '../components/StudentFAQ';
import MailingListButton from '../components/MailingListButton';

import studentImage from '../assets/images/headers/students.png';

import SectionSubtitle from '../components/SectionSubtitle';

const MAILCHIMP_URL = 'https://lablueprint.us4.list-manage.com/subscribe/post?u=223f2f7d67a9bd0b9f9172a69&amp;id=70cbf4957b';

export default function StudentPage() {
  return (
    <>
      <PageHeader
        className="students"
        title="For Students"
        render={() => (
          <>
            <SectionSubtitle>
              Joining Blueprint is a great way to give back to your community. Help us build our
              applications and work with nonprofits!
            </SectionSubtitle>
            {/* <SectionSubtitle className="sign-up mb-3">
              Applications are currently open! The deadline is October 8th, 11:59 PM PST.
            </SectionSubtitle>
            <Button className="outline-white" size="md" href="https://bit.ly/LABlueprintMemberAppFall21">
              Check out our applications
            </Button> */}
            <SectionSubtitle className="sign-up mb-3">
              Applications are currently closed. Sign up for our mailing list to
              get an email when our next recruitment cycle begins!
            </SectionSubtitle>
            <form action={MAILCHIMP_URL} method="post" className="mailing-list">
              <input className="mailing-list-input" name="EMAIL" placeholder="example@email.com" />
              <Button className="outline-white" type="submit" size="md">
                Submit
              </Button>
            </form>
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
