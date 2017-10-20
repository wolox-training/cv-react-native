import { createStore, combineReducers } from 'redux'
import filters from './filters/redux';
import books from './books/redux'

const rootReducer = combineReducers({
  filters, books
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
