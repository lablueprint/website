import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './app/Pages/HomePage';
import TeamPage from './app/Pages/TeamPage';
import PageNotFound from './app/Pages/PageNotFound';
import CommonNavbar from './app/Components/CommonNavbar';
import { withRouter } from "react-router";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      section: null
    };
    this.setScrollDestination = this.setScrollDestination.bind(this);
  }

  setScrollDestination(section) {
    this.setState({
      section: section
    });
  }

  render() {
    const CommonNavbarWithRouter = withRouter(CommonNavbar);
    return (
      <BrowserRouter>
        <CommonNavbarWithRouter setScrollDestination={this.setScrollDestination}/>
      	<Switch>
          <Route exact path="/">
            <HomePage section={this.state.section}/>
          </Route>
          <Route exact path="/team">
            <TeamPage/>
          </Route>
        	<Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
