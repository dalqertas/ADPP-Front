import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import authStore from "./Stores/authStore";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { nativeEvent } = event;
    this.setState({ [nativeEvent.target.name]: nativeEvent.target.value });
    console.log(nativeEvent);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    authStore.login(this.state, this.props.history);
  };
  render() {

    const { username, password } = this.state;
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
        <div className="card-header">ADPP</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-info">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginForm);
