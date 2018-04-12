import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      body: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      author: event.target.value
      body: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        author: this.state.author
        body: this.state.body,
      },
    });
    this.setState({
      author: '',
      body: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.author} onChange={(event) => this.handleOnChange(event)} />
          <input type="text" value={this.state.body} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
