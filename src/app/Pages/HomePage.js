import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import Landing from '../components/Landing';
import WhoWeAre from '../components/WhoWeAre';
import ContactButton from '../components/ContactButton';
import OurValues from '../components/OurValues';

const OPTIONS = {
  duration: 1500,
  delay: 100,
  smooth: true,
};

export default class HomePage extends Component {
  componentDidMount() {
    const { section } = this.props;

    if (section !== null) {
      scroller.scrollTo(section, OPTIONS);
    }
  }

  componentDidUpdate() {
    const { section } = this.props;

    if (section !== null) {
      scroller.scrollTo(section, OPTIONS);
    }
  }

  render() {
    return (
      <>
        <Landing id="landing" />
        <Fade>
          <WhoWeAre id="whoweare" bg="off-white" />
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
