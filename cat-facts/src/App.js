import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent/>
      </header>
    </div>
  );
}

function MyComponent(props) {
  var {order} = props; 
  return (
    <div>
      <p> My {order} component </p>
    </div>
  )
}

export default App;
