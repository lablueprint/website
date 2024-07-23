import React from 'react';
import Fade from 'react-reveal';
import { Button } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import SectionSubtitle from '../components/SectionSubtitle';

import NonprofitWhat from '../components/Nonprofit/NonprofitWhat';
import NonprofitTimeline from '../components/Nonprofit/NonprofitTimeline';
import NonprofitWhen from '../components/Nonprofit/NonprofitWhen';

export default function NonprofitPage() {
  return (
    <>
      <PageHeader
        className="nonprofits"
        title="For Nonprofits"
        render={() => (
          <>
            <SectionSubtitle>
              As a nonprofit partner, Blueprint will work with you to develop
              software that will bring your vision to life.
            </SectionSubtitle>
            {/* temporary link for 2024-25 npo recruitment
            <Button className="outline-white" size="md" href="/contact"> */}
            <Button className="outline-white" size="md" href="https://airtable.com/appSmNIv5ZC7s20mv/shrKz1mjNa9GuSZX8">
              Work with us
            </Button>
          </>
        )}
      />
      <div id="FAQ">
        <Fade>
          <NonprofitWhat />
        </Fade>
      </div>
      <Fade>
        <NonprofitTimeline />
      </Fade>
      <div id="Apply">
        <Fade>
          <NonprofitWhen />
        </Fade>
      </div>
    </>
  );
}
