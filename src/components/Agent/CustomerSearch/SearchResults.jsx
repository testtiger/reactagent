import React, { Component } from "react";

class SearchResults extends Component {
  saveProfileAccessed(profileObject, isProfilePageRequested) {
    console.log("------------->search result click", this.props);
    console.log("------------->search result profile", profileObject);
    if (profileObject === undefined) {
      throw TypeError("Check Profile Object value");
    }
    if (this.props.onClickProfileInfo && isProfilePageRequested) {
      this.props.onClickProfileInfo(profileObject.profileDetail.id);
    } else if (this.props.onClickCreateOrderLink) {
      this.props.onClickCreateOrderLink(profileObject.profileDetail.id);
    }
  }
  render() {
    //props.onClickProfileInfo(profileId);

    console.log("hi hello", this.props.resp.profileList);
    if (!this.props.resp.profileList) {
      return null;
    }
    if (this.props.resp.profileList.length === 0) {
      return (
        <div>
          <hr />
          <h5>No Search resutls found for provided criteria...</h5>
        </div>
      );
    }
    return (
      <div className="Container">
        <div className="row">
          <h3>Search Results:</h3>
          <hr />
          <table className=" table table-bordered table-responsive ">
            <TableHeader />

            <TableBody
              onSearchResultClick={this.saveProfileAccessed.bind(this)}
              profilesList={this.props.resp.profileList}
            />
          </table>
        </div>
      </div>
    );
  }
}

function TableHeader() {
  return (
    <thead>
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
    </thead>
  );
}

function TableBody(props) {
  let profilesList = props.profilesList;
  var element = profilesList.map(profile => {
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
              props.onSearchResultClick(profile, true);
            }}
          >
            Info...
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              props.onSearchResultClick(profile, false);
            }}
          >
            {profile.hasIncompleteOrder ? "Complete" : "+New"}
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{element}</tbody>;
}

export default SearchResults;
