import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../containers/Items.css';
import { increaseLikes } from '../actions/items';

class ItemCard extends Component {

  // componentDidMount() {
  //   this.props.getItems()
  // }
  // state = {
  //   counter: 0
  // };

  // handleOnClick = event => {
  //   this.setState({counter: this.state.counter + 1})
  // }

  // callApi = () => {
  //   console.log('a')
  //   fetch('http://localhost:3001/api/items')
  //   .then(response => {
  //     console.log('b')
  //     return response.json()
  //   })
  //   .then(items => console.log('c', items))
  //   .catch(err => console.log('d', err))
  //   console.log('e')
  //
  //   // a e b c
  // }
  // <button onClick={() => this.callApi()}>Call Api</button>


  handleOnClick = item => {
    this.props.increaseLikes(item)
  }

  render() {
    const {image, name, price, like_count} = this.props.item;
    return (
      <div className="ItemCard">
        <img className="ItemImage" src={image} alt={name} width={275} height={200}/>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={() => this.handleOnClick(this.props.item)}>Like</button>
        {like_count}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return ({
    items: state.items
  })
}

export default connect(mapStateToProps, { increaseLikes })(ItemCard);

// const ItemCard = ({ item }) => (
//   <div className="ItemCard">
//     <img className="ItemImage" src={item.image} alt={item.name} width={275} height={200}/>
//     <h3>{item.name}</h3>
//     <p>Price: ${item.price}</p>
//     <button onClick={this.handleOnClick}>Like</button>
//     Counter: {item.like_count}
//   </div>
// // )
//
// export default ItemCard;
