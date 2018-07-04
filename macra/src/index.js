import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dagwood from './Dagwood';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dagwood />, document.getElementById('cuteCatDagwood'));
registerServiceWorker();
