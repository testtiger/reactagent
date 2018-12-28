import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import { makeGetCall } from "../Rest/agent-rest-client";
class CustomerSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResponse: []
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
  render() {
      let SearcResultsElement = this.state.searchResponse.length ? <SearchResults resp={this.state.searchResponse}/> : null;
    return (
      <div className="container">
        <SearchCriteria />
        {SearcResultsElement}
      </div>
    );
  }
}

export default CustomerSearchPage;
