export default (state = [], action) => {
  switch(action.type) {
    case 'GET_REVIEWS_SUCCESS':
      return action.reviews;

    case 'CREATE_REVIEW_SUCCESS':
      return state.concat(action.review);

    case 'DELETE_REVIEW':
      const reviews = state.filter(review => review.id !== action.review.id);
      return reviews

    default:
      return state;
  }
}
