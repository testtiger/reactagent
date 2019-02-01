import React, { Component } from "react";
import { NavLink } from "react-router-dom";

var navLinksTyle={
  "background-color": 'yellow',
  textDecoration: 'none',
  color: 'black'
}
class Navigation extends Component {
 


  isLoggedIn() {
    return sessionStorage.getItem("isLoggedin") === "true";
  }

  componentDidUpdate() {}
  render() {
    if (!this.isLoggedIn()) {
      return null;
    }

    return <div className="container ">
        <nav className="navbar navbar-light">
          <div className="col-md-2">
            <NavLink activeStyle={navLinksTyle} to="/dashboard">
              DashBoard
            </NavLink>
          </div>
          <div className="col-md-2">
            <NavLink activeStyle={navLinksTyle} to="/customers">
              Customers
            </NavLink>
          </div>
        </nav>
      </div>;
  }
}
export default Navigation;
