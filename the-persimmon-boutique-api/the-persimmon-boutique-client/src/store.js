import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const reviewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_REVIEW':
      return action.surfboard;
    case 'DELETE_REVIEW':
      return action.surfboard
    default:
      return state;
  }
}

const reviews = reviewsReducer(null, {type: '@@INIT' });
