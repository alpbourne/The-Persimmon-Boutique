import React, { Component } from 'react';

class ReviewCard extends Component {
  handleOnClick = (review) => {
    this.props.deleteReview(review);
  }

  render() {
    return (
      <div>
        <p><b>{this.props.review.author}:</b> {this.props.review.body}<button onClick={(review) => {this.handleOnClick(review)}}>Delete</button></p>
      </div>
    );
  }
};

export default ReviewCard;

// import React from 'react';
//
// const ReviewCard = ({ review }) => (
//   <div className="ReviewCard">
//     <li>
//       {this.props.review.author}
//       {this.props.review.body}
//     </li>
//   </div>
// );
//
// export default ReviewCard;
