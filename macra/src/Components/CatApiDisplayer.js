import React from 'react'
import ReactDOM from 'react-dom';
import CatDisplay from '../Components/CatDisplay';
import {catCall} from '../lib/CatApiDisplayerLib.js';

const API_CAT = 'Api Cat';

export default class CatApiDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCatObject: {
         name: API_CAT,
         resource: 'http://dagwood.cat/',
      } 
    };
  }

  componentDidMount = async () => {
    const catImgUrl = await catCall();
    this.setState({
      currentCatObject: { 
        name: API_CAT,
        resource: catImgUrl
      }
    });
  }

  render() { 
    return (
      <CatDisplay cat={this.state.currentCatObject} />
    );
  }
}

