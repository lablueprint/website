import React from 'react';
import { Button, Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';

export default function MailingListButton() {
  return (
    <SectionContainer className="mailing-list-button">
      <Container className="mailing-list-button-container mb-5 text-center">
        {/* <div className="mailing-list-button-text">
          Applications are now open! The deadline is October 6th, 11:59 PM PST.
        </div>
        <Button className="raised-button blue" href="[INSERT APPLICATION LINK]">
          2023-24 Application
        </Button> */}
        <div className="mailing-list-button-text">
          Fill out our interest form to get an email when applications open!
        </div>
        <Button className="raised-button blue" href="https://airtable.com/appNXPLX16HDPNLLY/shrjFzXLVJ0vbGCSy">
          2023-24 Interest Form
        </Button>
      </Container>
    </SectionContainer>
  );
}
