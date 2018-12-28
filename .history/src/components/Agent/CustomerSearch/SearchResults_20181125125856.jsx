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
  if (props && props.profieList){

    let profilesList= props.profileList
    profilesList.map((profile)=>{
      profile = {
        "numberOfOrders": 0,
        "profileDetail": {
          "firstName": "Rahul",
          "lastName": "Dravid",
          "profileType": null,
          "repositoryId": "171453",
          "shippingAddress": null,
          "id": "171453",
          "parentOrganization": null,
          "email": "rahul@example1542886926918.com",
          "secondaryOrganizations": []
        },
        "latestOrderId": null,
        "latestOrderSiteId": null,
        "hasIncompleteOrder": false
      }
      return (
        <tr>
          <td>profile.profileDetail.firstName</td>
          <td>profile.profileDetail.lastName</td>
          <td>profile.profileDetail.email</td>
          {if()}
          <td>profile.profileDetail.shippingAddress?profile.profileDetail.shippingAddress.phoneNumber:""</td>
          <td>profile.profileDetail.shippingAddress?profile.profileDetail.shippingAddress.phoneNumber:""</td>
        </tr>
        
      )
    })

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

