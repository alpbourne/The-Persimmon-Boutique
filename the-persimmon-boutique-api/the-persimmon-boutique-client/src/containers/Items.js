import React from 'react';
import ItemCard from '../components/ItemCard';
import './Items.css';

const Items = (props) => (
  <div className="ItemsContainer">
    <h2>Our Collection</h2>
    {props.items.map(item => <ItemCard key={item.id} item={item} />)}
  </div>
);

export default Items;
