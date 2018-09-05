import React from 'react'
import ReactDOM from 'react-dom';
import {catCall} from '../lib/CatApiCall.js';

export default class ApiViewTest extends React.Component
{
  state = {
     imgUrl: 'http://dagwood.cat/',
  }
  
  render() { 
    return (
     <img src={this.state.imgUrl} alt="kappa"/>
    );
  }

  componentDidMount = async () => {
    console.log('calling');
    const res = await catCall();
    const resText = await res.json();
    console.log(resText);
    console.log(resText[0].url);
    console.log('Hey macarana!');
    this.setState({imgUrl: resText[0].url});
  }
}

