import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Portfolio from './portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
