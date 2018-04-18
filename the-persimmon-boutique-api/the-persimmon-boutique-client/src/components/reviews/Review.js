import React, { Component } from 'react';

class Review extends Component {
  // handleOnClick = (review) => {
  //   this.props.deleteReview(review.id);
  // }

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
