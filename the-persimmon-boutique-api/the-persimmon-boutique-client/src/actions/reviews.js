const setReviews = reviews => {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews
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
      data: JSON.stringify(review)
    })
      .then(response => response.json())
      .then(review => {
        debugger
      })
      .catch(error => console.log(error));
  }
}
