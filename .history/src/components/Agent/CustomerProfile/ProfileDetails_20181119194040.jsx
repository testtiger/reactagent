import React, { Component } from "react";

export default class ProfileDetails extends Component {
  //firstName
  //lastName
  //emailid
  //Email prefrences
  //CreateNewOrder Link
  // Save Changes
  render() {
    return (
      <div className="container">
        <h3> Customer Profile</h3>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="firstName">firstName</label>
            <input type="text" value={this.props.firstName} />
            <label htmlFor="firstName">firstName</label>
            <input id=""type="text" value={this.props.lasttName} />
          </div>
          <input type="text" value={this.props.firstName} />
        </div>
      </div>
    );
  }
}
