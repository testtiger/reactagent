import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Search Results</h3>
        <hr />
      </div>
    );
  }
}

function TableHeader() {
  return (
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Zio Code</th>
      <th>Account</th>
      <th>Latest Order</th>
      <th>Orders</th>
      <th>Profile Details</th>
      <th>Cart</th>
    </tr>
  );
}

function TableBody(props) {
  if (props && profieList.props){


    
    let profieList = props.profileList;
    let firstName ="";
        let lastName ="";
    let email = "";
    let phoneNumber=""

      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Zio Code</th>
        <th>Account</th>
        <th>Latest Order</th>
        <th>Orders</th>
        <th>Profile Details</th>
        <th>Cart</th>
      </tr>
    return ();
  }
  else{
    return <tr>No Search resutls found for provided criteria...</tr>
  }
 
}

