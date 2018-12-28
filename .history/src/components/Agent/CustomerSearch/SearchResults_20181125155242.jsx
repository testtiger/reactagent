import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("hi hello", this.props.resp.profileList);
    return (
      <div className="Container">
        <h3>Search Results</h3>

        <table className="table">
          <TableHeader />
          <tbody>
            <TableBody profilesList={this.props.resp.profileList} />
          </tbody>
        </table>
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
  if (props && props.profilesList) {
    let profilesList = props.profilesList;
    return profilesList.map(profile => {
      return <tr key={profile.profileDetail.id}>
          <td>{profile.profileDetail.firstName}</td>
          <td>{profile.profileDetail.lastName}</td>
          <td>{profile.profileDetail.email}</td>

          <td>
            {profile.profileDetail.shippingAddress?profile.profileDetail.shippingAddress.phoneNumber:""}
          </td>
          <td>
           { profile.profileDetail.shippingAddress?profile.profileDetail.shippingAddress.phoneNumber:""}
          </td>
          <td>
            {profile.profileDetail.parentOrganization?profile.profileDetail.parentOrganization:""
          </td>
          <td>profile.latestOrderId ?profile.latestOrderId:{""}</td>
          <td>profile.numberOfOrders?profile.numberOfOrders:0</td>
          <td>
            <a href="">Info...</a>
          </td>
          <td>
            profile.hasIncompleteOrder?{"Complete"}:{"+New"}
          </td>
        </tr>;
    });
  } else {
    return <tr>No Search resutls found for provided criteria...</tr>;
  }
}

export default SearchResults;
