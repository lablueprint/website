import './app/assets/stylesheets/main.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CommonNavbar from './app/components/CommonNavbar';
import Footer from './app/components/Footer';

import HomePage from './app/pages/HomePage';
import NotFoundPage from './app/pages/NotFoundPage';
import TeamPage from './app/pages/TeamPage';
import ProjectPage from './app/pages/ProjectPage';
import ContactPage from './app/pages/ContactPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: null,
    };
    this.setScrollDestination = this.setScrollDestination.bind(this);
  }

  setScrollDestination(section) {
    this.setState({ section });
  }

  render() {
    const { section } = this.state;

    return (
      <BrowserRouter>
        <Route
          // eslint-disable-next-line react/no-children-prop
          children={
            <CommonNavbar setScrollDestination={this.setScrollDestination} />
          }
        />
        <Switch>
          <Route exact path="/">
            <HomePage section={section} />
          </Route>
          <Route exact path="/projects">
            <ProjectPage />
          </Route>
          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
