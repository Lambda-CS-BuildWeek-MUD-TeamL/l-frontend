import React from 'react';

const Login = () => {

    return (
        <div className="login-page">
            <div className="user-icon">
                <i className="fas fa-user"></i>
            </div>
            <p>Log in to your Account</p>
            <div className="login-form">
                <form>
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password" />
                    <input type="submit" placeholder="login" />
                </form>
            </div>
        </div>
    )
}

export default Login