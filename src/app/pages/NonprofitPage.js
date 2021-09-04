import React from 'react';

import { Button } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';

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
            <div className="mb-3">
              As a nonprofit partner, Blueprint will work with you to develop software
              that will bring your vision to life.
            </div>
            <Button size="md" href="/contact">
              Work with us
            </Button>
          </>
        )}
      />
      <NonprofitWhat />
      <NonprofitTimeline />
      <NonprofitWhen />
    </>
  );
}
