import * as types from '../constants/actionTypes';

const authState = {
  showLogin: false
};


const authReducer = (state=authState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOGIN :
            const toggled = {
                showLogin: !authState.showLogin,
                ...state
            }

            return toggled;

            default: 
                return state

    }

    
}

export default authReducer;