import * as types from '../constants/actionTypes';
import axios from 'axios';

export const enterUsernameActionCreator = (input) => ({
  type: types.ENTER_USERNAME,
  payload: input,
});

export const enterEmailActionCreator = (input) => ({
  type: types.ENTER_EMAIL,
  payload: input,
});

export const enterPasswordActionCreator = (input) => ({
  type: types.ENTER_PASSWORD,
  payload: input,
});

export const registerSubmitActionCreator = (user) => {
  return (dispatch) => {
    fetch('/somewhere', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.REGISTER_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};

export const loginSubmitActionCreator = (user) => {
  return (dispatch) => {
    fetch('/tosomelogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.LOGIN_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};

export const enterGoalTitleActionCreator = (input) => ({
  type: types.ENTER_GOAL_TITLE,
  payload: input,
});

export const enterGoalActionCreator = (input) => ({
  type: types.ENTER_GOAL_INFO,
  payload: input,
});

export const addGoalActionCreator = (goal) => {
  return (dispatch) => {
    fetch('/somewhere', {
      //change post route to match backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: goal.title,
        goalInfo: goal.goalInfo,
        done: goal.done,
      }), //messed up i think 
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.ADD_GOAL_SUBMIT });
      })
      .catch((err) => console.log(err));
  };
};
