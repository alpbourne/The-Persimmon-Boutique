import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const reviewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_REVIEW':
      return action.item;
    case 'DELETE_REVIEW':
      return action.item;
    default:
      return state;
  }
}

const reducers = combineReducers({
  reviews: reviewsReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
