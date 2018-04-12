import React, { Component } from 'react';
import Items from './Items';
import './App.css';
import ReviewInput from '../components/reviews/ReviewInput';

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
        <h3>Please tell us how we are doing! </h3>
        <ReviewInput store={this.props.store} />
      </div>
    );
  }
}

export default App;
