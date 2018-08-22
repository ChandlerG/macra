import React from 'react'
import ReactDOM from 'react-dom';
import {catCall, extractImg} from './lib/CatApiCall.js';

export default class ApiViewTest extends React.Component
{
  state = {
     imgUrl: '',
  }
  
  render() { 
    return (
     <img src={this.state.imgUrl}/>
    );
  }

  componentDidMount = async () => {
    let imageTag;
    const res = await catCall();
    const resText = await res.json();
    console.log(resText);
    this.setState({imgUrl: resText[0].url});
  }
}

