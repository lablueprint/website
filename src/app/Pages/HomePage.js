import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Landing from '../Components/Landing';
import WhoWeAre from '../Components/WhoWeAre';
import ContactButton from '../Components/ContactButton';
import OurValues from '../Components/OurValues';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';

export default class HomePage extends Component {

  componentDidMount() {
    scroller.scrollTo(this.props.section, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  componentDidUpdate() {
    scroller.scrollTo(this.props.section, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  render() {
    return (
      <>
        <Landing id="landing"/>
        <Fade>
          <WhoWeAre id="whoweare"/>
        </Fade>
        <Fade>
          <ContactButton id="contactus"/>
       </Fade>
       <Fade>
          <OurValues id="values"/>
        </Fade>
      </>
    );
  }
}