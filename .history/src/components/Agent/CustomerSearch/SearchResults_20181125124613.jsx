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

function TableHeader(props) {
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
      <th>Details</th>
      <th>Details</th>
    </tr>
  );
}
