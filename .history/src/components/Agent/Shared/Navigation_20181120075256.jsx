import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.setState={
      toBe
    }
  }

  isLoggedIn() {
    return sessionStorage.getItem("isLoggedin") === "true";
  }

  componentDidUpdate(){

  }
  render() {
    if (!this.isLoggedIn()) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <NavLink to="/welcome">DashBoard</NavLink>
          </div>
          <div className="col-md-1">
            <NavLink to="/customers">Customers</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;