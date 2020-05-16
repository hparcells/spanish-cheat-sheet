import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './components/App/App';

import './styles/global.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// Tracking
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-134185568-9');
  ReactGA.pageview('/');
}
