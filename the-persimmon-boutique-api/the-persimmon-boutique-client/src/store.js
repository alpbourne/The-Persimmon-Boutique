import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import reviews from './reducers/reviews';
import reviewFormData from './reducers/reviewFormData';
import items from './reducers/items';

const reducers = combineReducers({
  reviews,
  reviewFormData,
  items
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
