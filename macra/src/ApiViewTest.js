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
    let result = 'hi';
    let imageTag;
    const res = await catCall();
    const resText = await res.text()
    const extractedImageArray = extractImg(resText);
    const extractedImage = extractedImageArray[1];
    this.setState({imgUrl: extractedImage});
  }
}

