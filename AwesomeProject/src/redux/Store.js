import { createStore,  combineReducers } from 'redux';
import contacts from './contacts/reducer.js';
import chat from './chat/reducer.js';
import groups from './groups/reducer.js';

const rootReducer = combineReducers({
  contacts,
  chat,
  groups
});

const store =  createStore(
  rootReducer
);

export default store;
