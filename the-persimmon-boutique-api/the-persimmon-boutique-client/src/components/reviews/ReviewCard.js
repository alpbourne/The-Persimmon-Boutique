import React, { Component } from 'react';

class ReviewCard extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <div>
        <p><b>{this.props.review.author}:</b> {this.props.review.body}<button onClick={() => this.handleOnClick()}>Delete</button></p>
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
