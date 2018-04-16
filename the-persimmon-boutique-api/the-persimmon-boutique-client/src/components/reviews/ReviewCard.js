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
        <li>
          <h4>{this.props.review.author}</h4>
          <p>{this.props.review.body}</p>
          <button onClick={() => this.handleOnClick()}>Delete</button>
        </li>
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
