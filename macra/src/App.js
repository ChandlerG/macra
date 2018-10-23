import React, { Component } from 'react';
import CatDisplay from './Cats/CatDisplay';
import ApiViewTest from './Components/ApiViewTest';
import './styles/styles.css'

const DAGWOOD = 'Dagwood'
const SULLY = 'Sully'

const dagwoodObject = {
      name: DAGWOOD,
      resource: 'dagwood.jpg'
};

const sullyObject = {    
      name: SULLY,
      resource: 'sully.jpg'
}

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCat: DAGWOOD,
        currentCatObject: dagwoodObject
      }
    }

  updateCat = () => {
    if (this.state.currentCat === DAGWOOD) {
      this.setState({currentCat: SULLY, currentCatObject: sullyObject})
    } else {
      this.setState({currentCat: DAGWOOD, currentCatObject: dagwoodObject})
    }
  }

  render() {
    return (
      <div style={{'textAlign':'center'}}>
        <button className="center-button" onClick={this.updateCat}>CLICK ME</button>
        <CatDisplay cat={this.state.currentCatObject}/>
        <ApiViewTest/>
      </div>
    );
  }
}

export default App;
