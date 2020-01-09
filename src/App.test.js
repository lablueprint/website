import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

function onMount() {
  // do nothing since this is for google analytics
}

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router history={history}>
      <App onMount={onMount} />
    </Router>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
