import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './app/Pages/HomePage'
import TeamPage from './app/Pages/TeamPage'
import PageNotFound from './app/Pages/PageNotFound'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
        	<Route exact={true} path="/" render={HomePage} />
        	<Route exact={true} path="/team" render={TeamPage} />
        	<Route render={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
