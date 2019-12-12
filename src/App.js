import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CommonNavbar from './app/Components/CommonNavbar';
import Footer from './app/Components/Footer';

import HomePage from './app/Pages/HomePage';
import NotFoundPage from './app/Pages/NotFoundPage';
import TeamPage from './app/Pages/TeamPage';
import ProjectPage from './app/Pages/ProjectPage';
import ContactPage from './app/Pages/ContactPage';

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
