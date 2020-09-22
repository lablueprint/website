import React from 'react';

import PageHeader from '../components/PageHeader';

export default function NonprofitPage() {
  return (
    <>
      <PageHeader
        className="nonprofits"
        title="For Nonprofits"
        render={() => 'As a nonprofit partner, Blueprint will work with you to develop software that will bring your vision to life.'}
      />
    </>
  );
}
