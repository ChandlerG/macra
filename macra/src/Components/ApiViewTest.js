import React from 'react'
import ReactDOM from 'react-dom';
import CatDisplay from '../Cats/CatDisplay';
import {catCall} from '../lib/CatApiCall.js';

const API_CAT = 'Api Cat';

export default class ApiViewTest extends React.Component {
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
    const res = await catCall();
    const resText = await res.json();
    this.setState({
      currentCatObject: { 
        name: API_CAT,
        resource: resText[0].url
      }
    });
  }

  render() { 
    return (
      <CatDisplay cat={this.state.currentCatObject} />
    );
  }
}

