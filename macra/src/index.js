import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dagwood from './Dagwood';
import Sully from './Sully';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dagwood />, document.getElementById('cuteCatDagwood'));
ReactDOM.render(<Sully />, document.getElementById('cuteCatSully'));
registerServiceWorker();
