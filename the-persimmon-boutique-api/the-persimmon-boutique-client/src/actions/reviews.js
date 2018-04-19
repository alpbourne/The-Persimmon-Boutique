import { resetReviewForm } from './reviewForm';

const setReviews = reviews => {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews
  }
}

const addReview = review => {
  return {
    type: 'CREATE_REVIEW_SUCCESS',
    review
  }
}

const removeReview = review => {
  return {
    type: 'DELETE_REVIEW',
    review
  }
}

export const getReviews = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/reviews')
      .then(response => response.json())
      .then(reviews => dispatch(setReviews(reviews)))
      .catch(error => console.log(error));
  }
}

export const createReview = review => {
  return dispatch => {
    return fetch('http://localhost:3001/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({review: review})
    })
      .then(response => response.json())
      .then(review => {
        dispatch(addReview(review))
        dispatch(resetReviewForm())
      })
      .catch(error => console.log(error));
  }
}

export const deleteReview = review => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(review => dispatch(removeReview(review)))
      .catch(error => console.log(error));
  }
}
