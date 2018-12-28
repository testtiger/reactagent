import React, { Component } from "react";
import { makeRestcall} from "../Rest/agent-rest-client.js";
import DashBoard from "../Dashboard/dashboard.jsx";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "",isLoggedin:false };
  }



  onChange(e) {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeusr(e) {
  console.log(e.target.name)
    this.setState({ username: e.target.value });
  }
  onChangepwd(e) {
    console.log(e.target.name);
    this.setState({ password: e.target.value });
  }
  login() {
    if (!this.state.username){
      console.log("enter user name");
    }
    if (!this.state.password) {
      console.log("enter passwordn");
    }
    
    if (this.state.password && this.state.username) {
      var payload = this.state;
      payload["grant_type"] = "password"

      makeRestcall("POST", "/ccagentui/v1/login", payload).then((response) => {
        console.log(response)
        if (response.access_token) {
          sessionStorage.setItem("token", "Bearer "+response.access_token);
          sessionStorage.setItem("isLoggedin", true);
          this.setState({ isLoggedin: true })
        }
        else{
          alert("Invalid user Name & password")
        }
      })
    }
    
  }
  render() {
    if(this.state.isLoggedin){
      return <DashBoard/>
    }
    else{
      
      return <div className="form-group">
          <label>UserName:</label>
          <input className="form-control col-lg-5" required={true} type="text" name="username" value={this.state.username} onChange={this.onChange.bind(this)} />
          <br />
          <label>Password:</label>
          <input className="form-control col-lg-5" required={true} type="password" name="password" value={this.state.password} onChange={this.onChange.bind(this)} />
          <br />
          <button className="btn btn-primary" onClick={this.login.bind(this)}>
            submit
          </button>
          <p>{this.state.username + "" + this.state.password}</p>
        </div>;
    }
    }
    
}
