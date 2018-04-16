import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from './ReviewInput';
import ReviewCard from './ReviewCard';
import { getReviews } from '../../actions/reviews';
import './Reviews.css';

class Reviews extends Component {
  componentDidMount(){
    this.props.getReviews()
  }
  render() {
    let reviews = this.props && this.props.reviews.length > 0 ?
      this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />): <span></span>;
    return(
      <div className="ReviewsContainer">
        <h2>Reviews</h2>
        {reviews}
        <ReviewInput />
      </div>
    );
  }
};

  // render() {
  //   return(
  //     <div className="ReviewsContainer">
  //       <h2>Reviews</h2>
  //       <ul>
  //         {this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)}
  //       </ul>
  //       <ReviewInput />
  //     </div>
  //   );
  // }

const mapStateToProps = (state) => {
  return ({
    reviews: state.reviews
  })
}

export default connect(mapStateToProps, { getReviews })(Reviews);
