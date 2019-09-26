import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "https://cs21teaml.herokuapp.com/api/login/";
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
      <div className="login-container">
        <div className="login-page">
          <div className="user-icon">
            <i className="fas fa-user"></i>
          </div>
          <p className="login-header">Log in to your Account</p>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.username}
                name="username"
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <Link className="signup-redirect" to="/signup">Don't have an account yet? Register here!</Link>
        </div>
      </div>
    );
  }
}
