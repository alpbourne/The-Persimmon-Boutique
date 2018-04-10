import React from 'react';
import './Items.css';

const Items = (props) => (
  <div>
    <h1>Our Collection</h1>
    {props.items.map(item =>
      <div className="ItemCard">
        <img className="ItemImage" src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
      </div>
    )}
  </div>
);

export default Items;
