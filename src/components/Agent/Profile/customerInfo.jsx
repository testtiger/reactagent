

import React, { Component } from "react";
import LoginPage from "../Login/loginpage";
class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      receiveEmail: ""
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
    let payload = this.state;
    payload["receiveEmail"] = payload["receiveEmail"] === true ? "yes" : "no";
    payload["shippingAddresses"] = [];

    console.log(JSON.stringify(payload));
  }
  render() {
    if (!this.isLoggedIn()) {
      return <LoginPage />;
    }
    return (
      <div>
        <h3> Customer</h3>
        <hr />

        <div className="row" >
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
        </div>
        <div className="row" />
        <div className="row" />
      </div>
    );
  }
}

export default CustomerInfo;
/***
 *   firstName: "Yuvraj",
            lastName: "singh",
            email: "yuvi@example"+Calendar.getInstance().getTimeInMillis()+".com",
            receiveEmail: "yes",
            taxExempt: false,
            shippingAddresses: [
                    shippingAddressJson
            ]
 */
