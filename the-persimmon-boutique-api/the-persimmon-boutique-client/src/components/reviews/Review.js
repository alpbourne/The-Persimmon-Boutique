import React, { Component } from 'react';

class Review extends Component {
  render() {
    const { review, deleteReview } = this.props
    return (
      <div>
        <p>
          <b>{review.author}:</b>
          {review.body}
          <button onClick={() => deleteReview(review)}>Delete</button>
        </p>
      </div>
    );
  }
};

export default Review;
