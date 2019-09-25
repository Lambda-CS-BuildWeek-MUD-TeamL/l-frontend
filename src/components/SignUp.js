import React from "react";
import axios from "axios";

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
    const endpoint = "https://lambda-mud-test.herokuapp.com/api/registration/";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("key/token", res.data);
        localStorage.setItem("token", res.data.key);
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="signup-page">
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
        <p className="signup-header">Create an Account</p>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            {" "}
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
              type="text"
              placeholder="password1"
              onChange={this.handleChange}
              value={this.state.password1}
              name="password1"
            />
            <input
              type="text"
              placeholder="password2"
              onChange={this.handleChange}
              value={this.state.password2}
              name="password2"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
