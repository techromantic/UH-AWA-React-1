import React from 'react';
import './App.css';
import CatCard from './CatCard';
function App() {

  var catFacts = [
    {
      image: 'https://purr.objects-us-east-1.dream.io/i/cute-animals-13.JPG',
      text: 'The technical term for a cat’s hairball is a bezoar.'
    }, 
    {
      image: 'https://purr.objects-us-east-1.dream.io/i/5oY4g.jpg',
      text: 'Female cats are typically right-pawed while male cats are typically left-pawed.'
    }
  ];

  return (
    <div className="App">
      <h3> Welcome to Cat Facts! </h3>
      <div className="cat-facts-container">
            {catFacts.map((fact) => <CatCard image={fact.image} fact={fact.text}/>)}
      </div>
    </div>
  );
}

export default App;
