import React from 'react';
import '../containers/Items.css';

const ItemCard = ({ item }) => (
  <div className="ItemCard">
    <img className="ItemImage" src={item.image} alt={item.name} width={275} height={200}/>
    <h3>{item.name}</h3>
    <p>Price: ${item.price}</p>
  </div>
)

export default ItemCard;
