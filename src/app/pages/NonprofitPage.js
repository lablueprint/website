import React from 'react';

import PageHeader from '../components/PageHeader';

export default function NonprofitPage() {
  return (
    <>
      <PageHeader
        className="nonprofits"
        title="For Nonprofits"
        render={() => 'As one of our nonprofit partners, Blueprint will work with you to develop an application that will bring your vision to life.'}
      />
    </>
  );
}
