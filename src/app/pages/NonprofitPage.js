import React from 'react';

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
        render={() => 'As a nonprofit partner, Blueprint will work with you to develop software that will bring your vision to life.'}
      />
      <NonprofitWhat />
      <NonprofitTimeline />
      <NonprofitWhen />
    </>
  );
}
