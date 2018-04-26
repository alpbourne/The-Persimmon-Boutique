import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from './ReviewInput';
import Review from '../components/reviews/Review';
import { getReviews, deleteReview } from '../actions/reviews';
import '../components/reviews/Reviews.css';

class Reviews extends Component {
  handleDeleteReview = (review) => {
    this.props.deleteReview(review)
  }

  componentDidMount(){
    this.props.getReviews()
  }

  render() {
    let reviews = this.props && this.props.reviews.length > 0 ?
      this.props.reviews.map(review => <Review key={review.id} review={review} deleteReview={this.handleDeleteReview}/>): <span></span>;
    return(
      <div className="ReviewsContainer">
        <h2>Reviews</h2>
        {reviews}
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

export default connect(mapStateToProps, { getReviews, deleteReview })(Reviews);
