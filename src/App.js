import React from 'react';
import { Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app/assets/stylesheets/main.scss';

export default function App() {
  // Google Analytics
  ReactGA.initialize('UA-154919965-1', { testMode: process.env.NODE_ENV === 'test' });
  const history = createBrowserHistory();
  history.listen((location) => {
    ReactGA.set({ page: location.pathname + location.search });
    ReactGA.pageview(location.pathname);
  });

  // callback function when App is mounted
  function onMount() {
    ReactGA.pageview(window.location.pathname);
  }

  return (
    <Router history={history}>
      {/* scrolls window to the top of the screen when changing routes */}
      <Route component={() => {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }
        return null;
      }}
      />
      <Routes onMount={onMount} />
    </Router>
  );
}
