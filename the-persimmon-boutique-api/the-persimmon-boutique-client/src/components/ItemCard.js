import React, { Component } from 'react';
import '../containers/Items.css';

class ItemCard extends Component {
  state = {
    counter: 0
  };

  handleOnClick = event => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div className="ItemCard">
        <img className="ItemImage" src={this.props.item.image} alt={this.props.item.name} width={275} height={200}/>
        <h3>{this.props.item.name}</h3>
        <p>Price: ${this.props.item.price}</p>
        <button onClick={this.handleOnClick}>Like</button>
        Counter: {this.state.counter}
      </div>
    )
  }
};
//
// } ({ item }) => (
//   <div className="ItemCard">
//     <img className="ItemImage" src={item.image} alt={item.name} width={275} height={200}/>
//     <h3>{item.name}</h3>
//     <p>Price: ${item.price}</p>
//     <button onSubmit={this.handleOnSubmit}>Like</button>
//   </div>
// )

export default ItemCard;
