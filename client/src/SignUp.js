import React, { Component } from 'react';

class SignUp extends Component {
    render(){
        return (
            <div className='signOverall'>
                <div className='signContainer'>
                    <div className='signHeader'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className='credentials' id="signCredentials">
                        <div id="firstLast">
                            <label>First Name:</label>
                            <input type="text"></input>
                            <label>Last Name:</label>
                            <input type="text"></input>
                        </div>
                        <div id="emailPass">
                            <label>Email:</label>
                            <input type="text"></input>
                            <label>Create Password:</label>
                            <input type="text"></input>
                        </div>
                        <button type="submit" href="/Home">Login</button>
                    </div>
                    <div className='signUp'>
                        <p>Already have an account?<span href='/Login'> Login</span></p>
                    </div>
                </div>
            </div>
        )
    }

}
export default SignUp;