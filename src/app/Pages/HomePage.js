import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Landing from '../Components/Landing';
import WhoWeAre from '../Components/WhoWeAre';
import { scroller } from 'react-scroll';

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
        <WhoWeAre id="whoweare"/>
      </>
    );
  }
}
