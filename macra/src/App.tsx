import * as React from 'react';
import CatDisplay from './Cats/CatDisplay';
import ApiViewTest from './ApiViewTest';
import './styles/styles.css'

class App extends React.Component {
  public state = {
    cats: [{
      name: 'Dagwood',
      resource: 'dagwood.jpg'
    }, {
      name: 'Sully',
      resource: 'sully.jpg'
    }],
    currentCat: 0,
  };

  public updateCat = () => {
      const nextCat = (this.state.currentCat + 1) % this.state.cats.length;
      this.setState({currentCat: nextCat});
  };

  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <button className="center-button" onClick={this.updateCat}>CLICK ME</button>
        <CatDisplay cat={this.state.cats[this.state.currentCat]}/>
        <ApiViewTest/>
      </div>
    );
  }
}

export default App;
