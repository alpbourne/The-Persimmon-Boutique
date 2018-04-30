import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../containers/Items';
import '../containers/App.css';
import Reviews from '../containers/Reviews';
import { getItems } from '../actions/items';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //       items: [],
  //       reviews: []
  //   }
  // }
  //
  // componentDidMount() {
  //   fetch('http://localhost:3001/api/items')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }))
  // }

  componentDidMount() {
    this.props.getItems()
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Items items={this.props.items}/>
        <Reviews/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    items: state.items
  })
}

export default connect(mapStateToProps, { getItems })(Home);
