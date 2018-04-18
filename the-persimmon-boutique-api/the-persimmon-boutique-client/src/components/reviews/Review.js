import React, { Component } from 'react';

class Review extends Component {
  // handleOnClick = (review) => {
  //   this.props.deleteReview(review.id);
  // }

  render() {
    return (
      <div>
        <p><b>{this.props.review.author}:</b> {this.props.review.body}<button onClick={() => this.handleOnClick()}>Delete</button></p>
      </div>
    );
  }
};

export default Review;

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
