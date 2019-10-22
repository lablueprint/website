import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './app/Pages/HomePage'
import TeamPage from './app/Pages/TeamPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={HomePage} />
        <Route exact={true} path="/team" render={TeamPage} />
      </BrowserRouter>
    );
  }
}
