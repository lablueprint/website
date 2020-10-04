import React from 'react';
import Fade from 'react-reveal';
import { Button } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import ApplicationProcess from '../components/ApplicationProcess';
import StudentFAQ from '../components/StudentFAQ';
import MailingListButton from '../components/MailingListButton';

// const MAILCHIMP_URL = 'https://lablueprint.us4.list-manage.com/subscribe/post?u=223f2f7d67a9bd0b9f9172a69&amp;id=70cbf4957b';

export default function StudentPage() {
  return (
    <>
      <PageHeader
        className="students"
        title="For Students"
        render={() => (
          <>
            <div className="mb-3">
              Joining Blueprint is a great way to give back to your community. Help us build our
              applications and work with nonprofits!
            </div>
            <div className="sign-up mb-3">
              Applications are now open! The deadline is October 16th, 11:59 PM PST.
            </div>
            <Button size="md" href="https://airtable.com/shrlSddk7PCH8Cc05">
              Check out our applications
            </Button>
            {/* <div className="sign-up mb-3">
              Sign up for our mailing list to get an email when applications open!
            </div>
            <form action={MAILCHIMP_URL} method="post" className="mailing-list">
              <input className="mailing-list-input" name="EMAIL" placeholder="example@email.com" />
              <Button type="submit" size="md">
                Submit
              </Button>
            </form> */}
          </>
        )}
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
