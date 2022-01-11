import React, { Component } from 'react';
import { Navigate } from 'react-router';
import { loginActionCreator } from '../actions/action';
import { Link } from 'react-router-dom';

//would also need to import the styling

// // mapDispatchToProps
// const mapDispatchToProps = dispatch => ({
//   submitLogin: (email, password) => dispatch(loginActionCreator(email, password))
// });



// mapStateToProps 

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle click method to handle user login
  handleClick() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    this.props.submitLogin(email, password);
  }

  render() {
//upon the return see if we can add in something to navigate to the dashboard page
    return ( this.props.user_id ? (
      <Navigate to='/dashboard' />
    ) : (
      <div className='login'>
        <h2>Log In</h2>
        <form className='container'>

            <div id='loginEmail'>Email Address</div>
            <input type='text' id='loginEmail' />

            <div id='loginPassword'> Password</div>
            <input type='password' id='password' />
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