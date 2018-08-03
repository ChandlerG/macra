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
    catCall().then(
      (res) => {
        return res.text()
      }
    ).then((res) => {
      result = res;
      //console.log(result);
      imageTag = extractImg(result);
      console.log(imageTag[1]);
      imageTag = imageTag[1];
      console.log(imageTag);
       this.setState({imgUrl: imageTag});
    });
  }
}

