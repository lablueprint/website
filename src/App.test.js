import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// to get rid of warning, 'Error: Not implemented: window.scrollTo'
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
