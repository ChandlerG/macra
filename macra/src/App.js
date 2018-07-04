import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dagwood from './Dagwood';
import Sully from './Sully';

class App extends Component {
  render() {
    return (
      <div>
        <Dagwood />
        <Sully />
      </div>
    );
  }
}

export default App;
