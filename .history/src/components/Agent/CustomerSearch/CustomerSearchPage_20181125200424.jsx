import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import Registration from "./Registration";
import CustomerProfilePage from "../CustomerProfile/CustomerProfilePage";
import { makeGetCall } from "../Rest/agent-rest-client";
import { Redirect } from "react-router-dom";
class CustomerSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistrationForm: false,
      isProfileInfoClicked: false,
      isOrderHistoryClicked: false,
      profileIdFromSearchResult: "",
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
  getCustomers(criteria) {
    var self = this;

    if (!criteria) {
      throw "Criteria cannot be empty";
    }
  
    console.log("------------>",criteria)

    var uri = "/ccagentui/v1/profiles/?q=" + JSON.stringify(criteria);

    var headers = { Authorization: sessionStorage.getItem("token") };
    console.log(headers + "---------------->");
    makeGetCall(uri, headers).then(response => {
      console.log("psots are ============>" + response);
        if (response.profileList.size){
            this.setState({ searchResponse:response})
        }
    });

  }

  onClickNewCustomer() {
    this.setState({ showRegistrationForm: true });
  }
  onClickViewOrderHistory(profileId) {
    if (profileId) {
      this.setState({ isOrderHistoryClicked: true });
      this.setState({ profileIdFromSearchResult: profileId });
    }
  }
  onClickProfileInfo(profileId) {
    if (profileId) {
      this.setState({ isProfileInfoClicked: true });
      this.setState({ profileIdFromSearchResult: profileId });
    }
  }
  render() {
    if (this.state.showRegistrationForm === true) {
      return <Redirect to="/customers/registration" />;
    }
    else if ( this.state.isProfileInfoClicked &&this.state.profileIdFromSearchResult) {
      return (
        <CustomerProfilePage profileId={this.state.profileIdFromSearchResult} />
      );
    } 
    else {
      let SearcResultsElement = this.state.searchResponse ? (
        <SearchResults
          resp={this.state.searchResponse}
          onClickProfileInfo={this.onClickProfileInfo.bind(this)}
        />
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
              <button onClick={this.onClickNewCustomer.bind(this)}>
                +New Customer
              </button>
            </div>
          </div>
          <SearchCriteria getCustomers={this.getCustomers.bind(this)} />
          {SearcResultsElement}
        </div>
      );
    }
  }
  componentWillMount() {
    console.log("Customer search page is unmounted");
    this.restoreOriginalState();
  }
  restoreOriginalState() {
    this.setState({
      showRegistrationForm: false,
      isProfileInfoClicked: false,
      isOrderHistoryClicked: false,
      profileIdFromSearchResult: ""
    });
  }
}

export default CustomerSearchPage;
