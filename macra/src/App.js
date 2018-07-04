import React, { Component } from 'react';
import './App.css';
import Dagwood from './Cats/Dagwood';
import Sully from './Cats/Sully';

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
