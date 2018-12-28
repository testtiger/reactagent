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
      searchResponse: null
    };
  }

  getCustomers(criteria) {
    var self = this;

    if (!criteria) {
      throw "Criteria cannot be empty";
    }

    console.log("------------>", criteria);

    var uri = "/ccagentui/v1/profiles/?q=" + JSON.stringify(criteria);

    var headers = { Authorization: sessionStorage.getItem("token") };


    makeGetCall(uri, headers).then(response => {
      console.log("psots are ============>", response);
      if (response.profileList && response.profileList.length > 0) {
        self.setState({ searchResponse: response });
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
    } else if (
      this.state.isProfileInfoClicked &&
      this.state.profileIdFromSearchResult
    ) {
      return (
        <Redirect to="/customers/profiles/" + this.state.profileIdFromSearchResult} />;
       // <CustomerProfilePage profileId={this.state.profileIdFromSearchResult} />
      );
    } else {
      let SearcResultsElement =null;
      if(this.state.searchResponse ){
        SearcResultsElement=<SearchResults resp={this.state.searchResponse} onClickProfileInfo={this.onClickProfileInfo.bind(this)} />;
      }
        
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
      profileIdFromSearchResult: "",
      searchResponse: {}
    });
  }
}

export default CustomerSearchPage;
