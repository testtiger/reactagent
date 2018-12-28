import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileAccessed: null
    };
  }

  restoreToDefaultState() {
    this.setState({ profileAccessed: null });
  }
  componentWillUnmount() {
    this.restoreToDefaultState();
  }

  saveProfileAccessed(profileObject) {
    console.log("------------->search result click", this.props);
    console.log("------------->search result profile", profileObject);
    if (this.props.onClickProfileInfo())
   
    this.setState({ profileAccessed: profileObject });
  }
  render() {
    //props.onClickProfileInfo(profileId);

    console.log("hi hello", this.props.resp.profileList);
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
  if (props && props.profilesList) {
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
                props.onSearchResultClick(profile);
              }}
            >
              Info...
            </button>
          </td>
          <td>{profile.hasIncompleteOrder ? "Complete" : "+New"}</td>
        </tr>
      );
    });

    return <tbody>{element}</tbody>;
  } else {
    return (
      <tbody>
        <tr>No Search resutls found for provided criteria...</tr>
      </tbody>
    );
  }
}

export default SearchResults;
