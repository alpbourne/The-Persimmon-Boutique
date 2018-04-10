import React, { Component } from 'react';
import Items from './Items';
import './App.css';


const items = [
  {
    name: "Sweater",
    price: 30,
    image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Heart Shaped Coffee Mug Set",
    price: 15,
    image: "https://images.pexels.com/photos/196651/pexels-photo-196651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Flower Skirt",
    price: 25,
    image: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Items items={items}/>
      </div>
    );
  }
}

export default App;
