import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Cat.css';

const CatDisplay = ({cat}) => <div>
    <img className="center-fit" src={cat.resource}/>
  </div>

export default CatDisplay;
