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
    currentCat: {
      name: 'Dagwood',
      resource: 'dagwood.jpg'
    },
  }

  updateCat = () => {
    if (this.state.currentCat.name === this.state.dagwood.name){
      this.setState({currentCat: this.state.sully})
    }
    else {
      this.setState({currentCat: this.state.dagwood})
    }
  }

  render() {
    return (
      <div style={{'textAlign':'center'}}>
        <button className="center-button" onClick={this.updateCat}>CLICK ME</button>
        <CatDisplay cat={this.state.currentCat}/>
        <ApiViewTest/>
      </div>
    );
  }
}

export default App;
