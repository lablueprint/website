import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import MeetTheTeam from '../Components/MeetTheTeam';
import WhereWeveBeen from '../Components/WhereWeveBeen';

export default function TeamPage() {
  return (
    <Fade bottom>
      <MeetTheTeam />
      <WhereWeveBeen />
    </Fade>
  );
}
