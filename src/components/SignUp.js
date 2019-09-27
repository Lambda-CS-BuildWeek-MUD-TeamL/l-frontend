import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "https://cs21teaml.herokuapp.com/api/registration/";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("key/token", res.data);
        const token = res.data["key"];
        localStorage.setItem("token", `Token ${token}`);
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-page">
          <div className="user-icon">
            <i className="fas fa-user"></i>
          </div>
          <p className="signup-header">Create an Account</p>
          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.username}
                name="username"
              />
              <input
                type="text"
                placeholder="email"
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.handleChange}
                value={this.state.password1}
                name="password1"
              />
              <input
                type="password"
                placeholder="confirm password"
                onChange={this.handleChange}
                value={this.state.password2}
                name="password2"
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <Link className="login-redirect" to="/login">Already have an account? Login here!</Link>
  
        </div>
      </div>
    );
  }
}
