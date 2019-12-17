import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import MeetTheTeam from '../components/MeetTheTeam';
import WhereWeveBeen from '../components/WhereWeveBeen';
import PageHeader from '../components/PageHeader';

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet Blueprint"
        // eslint-disable-next-line no-multi-str
        render={() => "We're a group of friendly folks at the University of California, Los Angeles \
        dedicated to building technology for the greater good."}
      />
      <MeetTheTeam />
      <WhereWeveBeen />
    </>
  );
}
