import React from 'react';
import SignInComponent from '../components/SignInComponent';
import Register from '../components/Register';
import {connect} from 'react-redux';

 function mapStateToProps(state){
        const authState = {state}
        // console.log(authState)
        return authState;

    }

    function mapDispatchToProps(dispatch) {
        return {
            toggleLogin: () => dispatch({ type: 'TOGGLE_LOGIN'})
        }
    }


function AuthContainer () {


    
    return (
        <div>
            <SignInComponent />
            <Register />
        </div>
    )
}


export default connect(mapDispatchToProps, mapStateToProps)(AuthContainer);
