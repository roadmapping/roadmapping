import React, { Component } from 'react';
import { Navigate } from 'react-router';
import { signUpActionCreator } from '../actions/action';
import { Link } from 'react-router-dom';

//would also need to import the styling

// mapStateToProps 


// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  submitSignup: (firstName, lastName, email, password, confirmPassword) => dispatch(signUpActionCreator(firstName, lastName, email, password, confirmPassword))
});


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const firsName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Signup method; make request to backend POST /users/signup
    this.props.submitSignup(firsName, lastName, email, password, confirmPassword)
  }
//upon the return see if we can add in something to navigate to the dashboard page
render() {
  return this.props.user_id ? (
    <Navigate to='/dashboard' />
  ) : (
      <div className='signUp'>
        <h2>Log In</h2>
        <form className='container'>

            <div id='signUpFirstName'>First Name</div>
            <input type='text' id='signUpFirst' />

            <div id='signUpLastName'>Last Name</div>
            <input type='text' id='signUpLast' />

            <div id='signUpEmail'>Email Address</div>
            <input type='text' id='signUpEmailAdd' />

            <div id='signUpPassword'> Password</div>
            <input type='password' id='passwordSignUp' />

            <div id='confirmPassword'> Confirm Password</div>
            <input type='password' id='passwordConfirm' />
        </form>

        <button id='loginButton' onClick={this.handleClick}>
          <div> Log In </div>
        </button>

        <Link to='/signup' className='signup-link'>Sign Up </Link> 
      </div>
    )
    )
  }
}

export default Login;