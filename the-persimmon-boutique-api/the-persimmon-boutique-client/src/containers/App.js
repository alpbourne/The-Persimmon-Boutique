import React, { Component } from 'react';
import Items from './Items';
import './App.css';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        items: []
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
        <ReviewInput store={this.props.store} />
        <Reviews store={this.props.store}/>
      </div>
    );
  }
}

export default App;
