import * as React from 'react'
import {catCall} from './lib/CatApiCall';

export default class ApiViewTest extends React.Component {
  public state = {
     imgUrl: '',
  };
  
  public render() {
    return (
     <img src={this.state.imgUrl}/>
    );
  }

  public componentDidMount = async () => {
    const resText = await catCall();
    console.log(resText);
    this.setState({imgUrl: resText[0].url});
  }
}

