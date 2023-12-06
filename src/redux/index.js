// index.js
import { combineReducers } from 'redux';
import authReducer from './reducers.js';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
