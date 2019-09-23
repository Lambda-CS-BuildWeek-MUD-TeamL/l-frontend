import React from 'react';

const SignUp = () => {
    return (
        <div className="signup-page">
            <div className="user-icon">
                <i className="fas fa-user"></i>
            </div>
            <p>Create an Account</p>
            <div className="signup-form">
                <form>
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password" />
                    <input type="submit" placeholder="signup" />
                </form>
            </div>
        </div>
    )
}

export default SignUp