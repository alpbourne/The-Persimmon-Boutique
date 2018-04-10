import React from 'react';

const Items = (props) => (
  <div>
    <h3>Our Collection</h3>
    {props.items.map(item => <h3>{item.name}</h3>)}
  </div>
);

export default Items;
