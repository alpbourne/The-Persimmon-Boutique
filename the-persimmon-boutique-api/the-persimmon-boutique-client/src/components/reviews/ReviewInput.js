import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReviewFormData } from '../../actions/reviews';

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
  handleOnChange = event => {
    const {name, value } = event.target;
    const currentReviewFormData = Object.assign({}, this.props.reviewFormData,{
      [name]: value
    })
    this.props.updateReviewFormData(currentReviewFormData)
    // this.setState({
    //   author: event.target.value,
    //   body: event.target.value,
    // });
  }

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
            <input type="text" name="author" value={author} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="body">Review:</label>
            <input type="text" name="body" value={body} onChange={this.handleOnChange} />
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
