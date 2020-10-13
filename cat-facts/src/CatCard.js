import React, {useState, useEffect} from 'react';
import './App.css';


function CatCard ({fact, image}){

  return (
    <div className="cat-card-root">
      <img className="cat-card-img" src={image}/>
      <p> {fact} </p>
    </div>
  )
}

export default CatCard; 
