import React, { Component } from "react";
import { makeRestcall } from "../Rest/agent-rest-client.js";
import DashBoard from "../Dashboard/DashboardPage.jsx";
import Navigation from "../Shared/Navigation";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isLoggedin: false };
    sessionStorage.setItem("isLoggedin", false);
    sessionStorage.setItem("token", null);
  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeusr(e) {
    console.log(e.target.name);
    this.setState({ username: e.target.value });
  }
  onChangepwd(e) {
    console.log(e.target.name);
    this.setState({ password: e.target.value });
  }
  validate() {
    if (!this.state.username) {
      alert("Enter user name");
    }
    if (!this.state.password) {
      alert("Enter password");
    }
    if (this.state.password && this.state.username) {
      alert("Username & password cannot be empty");
    }
  }
  login() {
    if (this.state.password && this.state.username) {
      var payload = this.state;
      payload["grant_type"] = "password";

      makeRestcall("POST", "/ccagentui/v1/login", payload).then(response => {
        console.log(response);
        if (response.access_token) {
          sessionStorage.setItem("token", "Bearer " + response.access_token);
          sessionStorage.setItem("isLoggedin", true);
          this.setState({ isLoggedin: true });
        } else {
          alert("Invalid user Name & password");
        }
      });
    }
  }
  render() {
    if (this.state.isLoggedin) {
      return (
        <div>
          <Navigation />
          <DashBoard />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-10">
              
            </div>
            <div className="col-md-82" />
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="form-group">
                <label>UserName:</label>
                <input
                  className="form-control col-lg-5"
                  required={true}
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange.bind(this)}
                />
                <br />
                <label>Password:</label>
                <input
                  className="form-control col-lg-5"
                  required={true}
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange.bind(this)}
                />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={this.login.bind(this)}
                >
                  submit
                </button>
                <p>{this.state.username + "" + this.state.password}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
