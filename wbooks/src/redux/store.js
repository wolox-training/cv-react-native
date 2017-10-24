import { createStore, combineReducers } from 'redux'
import filters from './filters/redux';
import books from './books/redux'
import login from './login/redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  filters,
  books,
  login,
  form: formReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
