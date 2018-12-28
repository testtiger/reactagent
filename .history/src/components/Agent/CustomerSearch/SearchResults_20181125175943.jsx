import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state={
      profileAccessed:null
    }
  }

  sa
  render() {
    console.log("hi hello", this.props.resp.profileList);
    return (
      <div className="Container">
        <div className="row">
          <h3>Search Results:</h3>
          <hr />
          <table className=" table table-bordered table-responsive ">
            <TableHeader />
            <tbody>
              <TableBody onClick={() => {
                props.onClickProfileInfo(profileId);
              }} profilesList={this.props.resp.profileList}  />
            </tbody>
          </table>
        </div>
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
      return (
        <tr key={profile.profileDetail.id}>
          <td>{profile.profileDetail.firstName}</td>
          <td>{profile.profileDetail.lastName}</td>
          <td>{profile.profileDetail.email}</td>

          <td>
            {profile.profileDetail.shippingAddress
              ? profile.profileDetail.shippingAddress.phoneNumber
              : ""}
          </td>
          <td>
            {profile.profileDetail.shippingAddress
              ? profile.profileDetail.shippingAddress.postalCode
              : ""}
          </td>
          <td>
            {profile.profileDetail.parentOrganization
              ? profile.profileDetail.parentOrganization
              : ""}
          </td>
          <td>{profile.latestOrderId ? profile.latestOrderId : ""}</td>
          <td>{profile.numberOfOrders ? profile.numberOfOrders : 0}</td>
          <td>
            <button
              onClick={() => {
                props.onClickProfileInfo(profile.profileDetail.id);
              }}
            >
              Info...
            </button>
          </td>
          <td>{profile.hasIncompleteOrder ? "Complete" : "+New"}</td>
        </tr>
      );
    });
  } else {
    return <tr>No Search resutls found for provided criteria...</tr>;
  }
}

export default SearchResults;
