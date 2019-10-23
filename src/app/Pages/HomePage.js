import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Landing from '../Components/Landing';
import WhoWeAre from '../Components/WhoWeAre';
import CommonNavbar from '../Components/CommonNavbar';

export default class HomePage extends Component {

  scroll(section) {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  componentDidMount() {
    if (this.props.browserHistory.history.location.state) {
      this.scroll(this.props.browserHistory.history.location.state.scrollToSection);
      this.props.clearLocationState();
    }
  }

  componentDidUpdate() {
    this.scroll(this.props.browserHistory.history.location.state.scrollToSection);
    this.props.clearLocationState();
  }

  render() {
    return (
      <>
        <CommonNavbar style={navbarStyle} />
        <Landing id="landing"/>
        <WhoWeAre id="whoweare"/>
      </>
    );
  }
}

const navbarStyle = {
  opacity: 1,
  position: "absolute",
  width: "100%"
}
