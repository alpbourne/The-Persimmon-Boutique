import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import cuid from 'cuid';
export const cuidFn = cuid;

const reviewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_REVIEWS_SUCCESS':
      return action.reviews;

    default:
      return state;
  }
}

// function reviewsReducer(state = {
//   reviews: [],
// }, action) {
//   switch (action.type) {
//     case 'ADD_REVIEW':
//       const review = { author: action.review.author, body: action.review.body, id: cuidFn() };
//        return Object.assign({}, state, {
//          reviews: state.reviews.concat(review),
//        });
//     case 'DELETE_REVIEW':
//       const reviews = state.reviews.filter(review => review.id !== action.id);
//       return Object.assign({}, state, { reviews });
//     default:
//       return state;
//   }
// }

const reducers = combineReducers({
  reviews: reviewsReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
