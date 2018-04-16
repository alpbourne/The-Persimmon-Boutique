import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from './ReviewInput';
import Review from './Review';

class Reviews extends Component {
  this.
  render()
    return(
      <div className="ReviewsContainer">
        <h2>Reviews</h2>
        <ul>
          {this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)}
        </ul>
        <ReviewInput />
    );
  }
};

export default connect()(Reviews);
