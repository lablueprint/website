import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MeetTheTeam from '../Components/MeetTheTeam';
import WhereWeveBeen from '../Components/WhereWeveBeen';
import PageHeader from '../Components/PageHeader';

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title='Meet Blueprint'
        render={() => "We're a group of friendly folks at the University of California, Los Angeles dedicated to building technology for the greater good."} />
      <MeetTheTeam />
      <WhereWeveBeen />
    </>
  );
}