import { combineReducers } from 'redux';

// import all reducers here like below
import goalReducer from './goalReducers';
import authReducer from './authReducers';

// combine reducers
const reducers = combineReducers({
  goal: goalReducer,
  auth: authReducer
});

// make the combined reducers available for import
export default reducers;