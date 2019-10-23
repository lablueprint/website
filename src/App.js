import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './app/Pages/HomePage';
import PageNotFound from './app/Pages/PageNotFound';
import TeamPage from './app/Pages/TeamPage';

const history = createBrowserHistory();

export default class App extends Component {

  clearLocationState() {
    history.push(history.location.pathname, {});
  }

  render() {
    return (
      <BrowserRouter>
      	<Switch>
        	<Route exact path="/" render={browserHistory => <HomePage browserHistory={browserHistory} clearLocationState={this.clearLocationState}/>}/>
        	<Route exact path="/team" render={TeamPage} />
        	<Route render={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
