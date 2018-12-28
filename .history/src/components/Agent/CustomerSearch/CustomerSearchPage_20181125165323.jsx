import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import { makeGetCall } from "../Rest/agent-rest-client";
class CustomerSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse: {
        profileList: [
          {
            numberOfOrders: 0,
            profileDetail: {
              firstName: "Rahul",
              lastName: "Dravid",
              profileType: null,
              repositoryId: "170066",
              shippingAddress: {
                phoneNumber: "123-123-1234",
                postalCode: "36006",
                repositoryId: "180070"
              },
              id: "170066",
              parentOrganization: null,
              email: "rahul@example1542611060507.com",
              secondaryOrganizations: []
            },
            latestOrderId: null,
            latestOrderSiteId: null,
            hasIncompleteOrder: false
          }
        ],
        hasMore: true,
        links: [
          {
            rel: "self",
            href:
              "http://busgk0711.us.oracle.com:9080/ccagentui/v1/profiles?q=%7B%22firstName%22%3A%22%22%2C%22lastName%22%3A%22%22%2C%22email%22%3A%22rahul%22%2C%22postalCode%22%3A%22%22%2C%22phoneNumber%22%3A%22%22%2C%22pageNumber%22%3A0%2C%22limit%22%3A15%2C%22requireCount%22%3Afalse%7D"
          }
        ],
        totalNoOfProfiles: 15
      }
    };
  }
  getCustomers() {
    var self = this;
    var uri = "";
    var headers = {};
    var queryParams = {};

    makeGetCall(uri, headers, queryParams).then(response => {
      response;
    });
  }
  
  onClickNewCustomer(e)
  viewOrderHistory() {}
  viewProfile() {}
  render() {
    let SearcResultsElement = this.state.searchResponse ? (
      <SearchResults resp={this.state.searchResponse} />
    ) : null;
    return (
      <div className="container">
        <h3>Customer Search</h3>
        <hr />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4" />
          <div className="col-md-2" />
          <div className="col-md-2">
            <button>+New Customer</button>
          </div>
        </div>
        <SearchCriteria />
        {SearcResultsElement}
      </div>
    );
  }
}

export default CustomerSearchPage;
