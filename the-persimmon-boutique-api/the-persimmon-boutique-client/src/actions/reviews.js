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
      .then(items => dispatch(setReviews))
      .catch(error => console.log(error));
  }
}
