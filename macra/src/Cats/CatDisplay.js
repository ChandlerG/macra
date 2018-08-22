import React from 'react';
import './Cat.css';

class CatDisplay extends React.Component{
    render() {
        return (
            <div>
                <img className="center-fit" src={this.props.cat.resource}/>
            </div>
        )
        // return (<img className="center-fit" src="dagwood.jpg"/>)
    }
}

//<div> name : {this.props.cat.name}</div>
               //<div> resource : {this.props.cat.resource}</div>

/*
  unidirectional flow
  react component only updates to props
  props == properties of your component
  when your prop updates, your component updates
*/


export default CatDisplay;
