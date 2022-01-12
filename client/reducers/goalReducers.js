/* eslint-disable no-case-declarations */
import * as types from '../constants/actionTypes';

//initial state
const goalState = {
  title: '',
  goalInfo: '',
  done: false,
};

const goalReducer = (state = goalState, action) => {
  switch (action.type) {
    case types.ENTER_GOAL_TITLE:
      const changedTitle = {
        ...state,
        title: action.payload,
      };
      return changedTitle;
    case types.ENTER_GOAL_INFO:
      const changedGoal = {
        ...state,
        goalInfo: action.payload,
      };
      return changedGoal;
    case types.ADD_GOAL_SUBMIT:
      const resetState = {
        ...state,
        title: '',
        goalInfo: '',
        done: false,
      };
      return resetState;

    default:
      return state;
  }
};

export default goalReducer;
