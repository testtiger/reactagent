import React, { Component } from "react";
import LoginPage from "../Login/loginpage";

import { makePostCall, getURIList, makeGetCall } from "../Rest/agent-rest-client";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      receiveEmail: ""

      payload:{}
      
    };
  }

  isLoggedIn() {
    return sessionStorage.getItem("isLoggedin") === "true";
  }
  onChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  registerCustomer() {

    var self = this;
    let payload = self.state;
   
    payload["receiveEmail"] = payload["receiveEmail"] === true ? "yes" : "no";

 
    var headers = { Authorization: sessionStorage.getItem("token") };
    makePostCall(getURIList().newProfile_URI, headers, payload).then(response => {
      console.log("proflie creation response  ============>" , response);
      if (response.id) {
        self.setState({ profileId: response.id });
      }
      if (response.errorCode) {
        self.setState({ errorMessage: response.message });
      }
    });
  }


  getProfileDetails(profileId) {
    var self=this;
    var headers = { Authorization: sessionStorage.getItem("token") };
    makeGetCall(getURIList().newProfile_URI + profileId, headers).then(response => {
      console.log("psots are ============>" + response);
      if (response.profileDetail) {
        self.setState({ profileDetail: response.profileDetail });
      }
      if (response.errorCode) {
        self.setState({ errorMessage: response.message });
      }
    });
  }

  componentWillUnmount() {
    if ("profileId" in this.state) {
      delete this.state.profileId;
    }
    if ("errorMessage" in this.state) {
      delete this.state.errorMessage;
    }
  }

  componentDidUpdate(){
    if ("profileId" in this.state) {
      delete this.state.profileId;
    }
    if ("errorMessage" in this.state) {
      delete this.state.errorMessage;
    }
  }
  render() {
    if (!this.isLoggedIn()) {
      return <LoginPage />;
    }
    if (this.state.profileId) {
     
      this.getProfileDetails(this.state.profileId);
      

    }
    if (this.state.errorMessage) {
      alert( this.state.errorMessage);
      delete this.state.errorMessage;
    }
    return (
      <div>
        <h3>Register Customer</h3>

        <hr />

        <div className="row">
          <div className="form-group col-md-3">
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="email"
              value={this.state.email}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="receiveEmail">
              <input
                name="receiveEmail"
                type="checkbox"
                id="receiveEmail"
                value={this.state.receiveEmail}
                onChange={this.onChange.bind(this)}
              />
              Receive Email
            </label>
          </div>
        </div>
        <div className="row">
          <button onClick={this.registerCustomer.bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}
