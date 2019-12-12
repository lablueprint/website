import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import Landing from '../Components/Landing';
import WhoWeAre from '../Components/WhoWeAre';
import ContactButton from '../Components/ContactButton';
import OurValues from '../Components/OurValues';

export default class HomePage extends Component {
  componentDidMount() {
    const { section } = this.props;

    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }

  componentDidUpdate() {
    const { section } = this.props;

    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <>
        <Landing id="landing" />
        <Fade>
          <WhoWeAre id="whoweare" bg="dark" />
        </Fade>
        <Fade>
          <OurValues id="values" />
        </Fade>
        <Fade>
          <ContactButton id="contactus" />
        </Fade>
      </>
    );
  }
}

HomePage.defaultProps = {
  section: null,
};

HomePage.propTypes = {
  section: PropTypes.string,
};
