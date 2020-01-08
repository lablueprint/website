import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    {/* scrolls window to the top of the screen when changing routes */}
    <Route component={() => { window.scrollTo(0, 0); return null; }} />
    <App />
  </BrowserRouter>, document.getElementById('root'),
);

serviceWorker.unregister();
