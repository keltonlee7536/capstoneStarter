import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className='loginOverall'>
      <div className='loginContainer'>
          <div className='loginHeader'>
              <h1>Login</h1>
          </div>
          <div className='credentials'>
              <label>Email:</label>
              <input type="text"></input>
              <label>Password:</label>
              <input type="text"></input>
              <button type="submit" href="/Home">Login</button>
          </div>
          <div className='signUp'>
              <p>Don't have an account?<span href='/SignUp'> Sign Up</span></p>
          </div>
      </div>
  </div>
    );
  }
}

export default Login;