import React, { Component } from 'react';
import Items from '../containers/Items';
import '../containers/App.css';
import Reviews from '../containers/Reviews';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
        items: [],
        reviews: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(items => this.setState({ items }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Items items={this.state.items}/>
        <Reviews store={this.props.store}/>
      </div>
    );
  }
}

export default Home;
