import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CommonNavbar from './app/Components/CommonNavbar';
import HomePage from './app/Pages/HomePage';
import NotFoundPage from './app/Pages/NotFoundPage';
import TeamPage from './app/Pages/TeamPage';
import Footer from './app/Components/Footer';

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
    return (
      <BrowserRouter>
        <Route children={ () => <CommonNavbar setScrollDestination={this.setScrollDestination}/>} />
      	<Switch>
          <Route exact path="/">
            <HomePage section={this.state.section}/>
          </Route>
          <Route exact path="/team">
            <TeamPage/>
          </Route>
        	<Route>
            <NotFoundPage/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}