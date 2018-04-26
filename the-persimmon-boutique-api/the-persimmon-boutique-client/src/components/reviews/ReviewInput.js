import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReviewFormData } from '../../actions/reviewForm';
import { createReview } from '../../actions/reviews';

class ReviewInput extends Component {

  handleOnChange = event => {
    const {name, value } = event.target;
    const currentReviewFormData = Object.assign({}, this.props.reviewFormData,{
      [name]: value
    })
    this.props.updateReviewFormData(currentReviewFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createReview(this.props.reviewFormData)
  }

  render() {
    const {author, body} = this.props.reviewFormData;
    return (
      <div>
        <h3>Please tell us how we are doing! </h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" value={author} onChange={this.handleOnChange} />
          </div>
          <div>
            <label htmlFor="body">Review:</label>
            <input type="text" name="body" value={body} onChange={this.handleOnChange} />
          </div>
          <button type="submit">Add Review</button>
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
export default connect(mapStateToProps, {
  updateReviewFormData,
  createReview
})(ReviewInput);
