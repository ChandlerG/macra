import React, { Component } from 'react';
import CatDisplay from './Cats/CatDisplay';
import ApiViewTest from './ApiViewTest';

class App extends Component {
  state = {
    dagwood: {
      name: 'Dagwood',
      resource: 'dagwood.jpg'
    },
    sully: {
      name: 'Sully',
      resource: 'sully.jpg'
    },
    currentCat: 'dagwood',
  }

  updateCat = () => this.setState({currentCat: 'sully'})

  render() {
    return (
      <div>
        <CatDisplay cat={this.state[this.state.currentCat]}/>
        <button onClick={this.updateCat}>CLICK ME</button>
        <ApiViewTest/>
      </div>
    );
  }
}

export default App;
