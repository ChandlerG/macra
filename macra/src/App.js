import React, { Component } from 'react';
import CatDisplay from './Cats/CatDisplay';
import ApiViewTest from './Components/ApiViewTest';
import './styles/styles.css'

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

  updateCat = () => {
    if (this.state.currentCat === 'dagwood'){
      this.setState({currentCat: 'sully'})
    }
    else {
      this.setState({currentCat: 'dagwood'})
    }
  }

  render() {
    return (
      <div style={{'textAlign':'center'}}>
        <button className="center-button" onClick={this.updateCat}>CLICK ME</button>
        <CatDisplay cat={this.state[this.state.currentCat]}/>
        <ApiViewTest/>
      </div>
    );
  }
}

export default App;
