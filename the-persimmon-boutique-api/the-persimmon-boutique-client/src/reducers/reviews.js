export default (state = [], action) => {
  switch(action.type) {
    case 'GET_REVIEWS_SUCCESS':
      return action.reviews;

    default:
      return state;
  }
}
