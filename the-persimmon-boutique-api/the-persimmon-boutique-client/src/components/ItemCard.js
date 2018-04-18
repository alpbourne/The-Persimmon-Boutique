import React from 'react';
import '../containers/Items.css';

const ItemCard = ({ item }) => (
  <div className="ItemCard">
    <img className="ItemImage" src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>Price: ${item.price}</p>
    <div className="btn-wishlist">
      <button onClick={() => this.props.addToWishlist()}>Add to Wishlist</button>
    </div>
  </div>
)

export default ItemCard;
