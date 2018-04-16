import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewInput extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     author: '',
  //     body: '',
  //   };
  // }
  //
  // handleOnChange(event) {
  //   this.setState({
  //     author: event.target.value,
  //     body: event.target.value,
  //   });
  // }
  //
  // handleOnSubmit(event) {
  //   event.preventDefault();
  //   this.props.store.dispatch({
  //     type: 'ADD_REVIEW',
  //     review: {
  //       author: this.state.author,
  //       body: this.state.body,
  //     },
  //   });
  //   this.setState({
  //     author: '',
  //     body: '',
  //   });
  // }

  render() {
    const {author, body} = this.props.reviewFormData;
    return (
      <div>
        <h3>Please tell us how we are doing! </h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" value={author} onChange={(event) => this.handleOnChange(event)} />
          </div>
          <div>
            <label htmlFor="body">Review:</label>
            <input type="text" name="body" value={body} onChange={(event) => this.handleOnChange(event)} />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    reviewFormData: state.reviewFormData
  }
}
export default connect(mapStateToProps)(ReviewInput);
