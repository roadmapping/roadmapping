import { combineReducers } from 'redux';

// import all reducers here like below
import goalReducer from './goalReducer';

// combine reducers
const reducers = combineReducers({
  goal: goalReducer,
});

// make the combined reducers available for import
export default reducers;