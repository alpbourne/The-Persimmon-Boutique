import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from './ReviewInput';
import ReviewCard from './ReviewCard';
import { getReviews } from '../../actions/reviews';
import './Reviews.css';

class Reviews extends Component {
  componentDidMount(){
    this.props.setReviews
  }
  render() {
    return(
      <div className="ReviewsContainer">
        <h2>Reviews</h2>
        <ul>
          {this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)}
        </ul>
        <ReviewInput />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    reviews: state.reviews
  })
}

export default connect(mapStateToProps, { getReviews })(Reviews);
