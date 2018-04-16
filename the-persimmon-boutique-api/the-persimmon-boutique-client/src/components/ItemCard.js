import React from 'react';

const ItemCard = ({ item }) => (
  <div className="ItemCard">
    <img className="ItemImage" src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>Price: ${item.price}</p>
  </div>
)

export default ItemCard;
