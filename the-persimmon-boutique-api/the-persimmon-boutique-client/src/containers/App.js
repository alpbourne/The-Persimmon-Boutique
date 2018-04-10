import React, { Component } from 'react';
import Items from './Items';
import './App.css';


const items = [
  {
    name: "Sweater",
    price: 30,
    image: " "
  },
  {
    name: "Coffee Mug",
    price: 15,
    image: " "
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        App Container
        <Items items={items}/>
      </div>
    );
  }
}

export default App;
