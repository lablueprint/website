import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

// Google Analytics
ReactGA.initialize('UA-154919965-1');
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname);
});

// callback function when App is mounted
function onMount() {
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router history={history}>
    {/* scrolls window to the top of the screen when changing routes */}
    <Route component={() => { window.scrollTo(0, 0); return null; }} />
    <App onMount={onMount} />
  </Router>, document.getElementById('root'),
);

serviceWorker.unregister();
