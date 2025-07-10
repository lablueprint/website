import React from "react";
import Fade from "react-reveal";
import { Button } from "react-bootstrap";

import PageHeader from "../components/PageHeader";
import SectionSubtitle from "../components/SectionSubtitle";

import NonprofitWhat from "../components/Nonprofit/NonprofitWhat";
import NonprofitTimeline from "../components/Nonprofit/NonprofitTimeline";
import NonprofitWhen from "../components/Nonprofit/NonprofitWhen";
import NonprofitMoreInfo from "../components/Nonprofit/NonprofitMoreInfo";

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
            {/* temporary change for 2024-25 npo recruitment
            <Button className="outline-white" size="md" href="/contact"> */}
            <Button
              className="outline-white"
              size="md"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYYQWWfUxok5SVLs611DKgqiI5Ie80shvVAEM-cDellmRlrg/viewform"
            >
              Work with us
            </Button>
            <br />
            <em>
              * Our application cycle for 2025-26 is now open!
            </em>
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
          <NonprofitMoreInfo />
        </Fade>
      </div>
      {/* <div id="Apply">
        <Fade>
          <NonprofitWhen />
        </Fade>
      </div> */}
    </>
  );
}
