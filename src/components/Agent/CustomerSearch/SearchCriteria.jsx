import React, { Component } from "react";

class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: {
        firstName: "",
        lastName: "",
        email: "",
        postalCode: "",
        phoneNumber: "",
        pageNumber: 0,
        limit: 15,
        requireCount: false
      }
    };
  }
  onChange(e) {
    let newCriteria = {
      ...this.state.criteria
    };
    let key = e.target.name;
    let value = e.target.value;
    newCriteria[key] = value;
    this.setState({ criteria: newCriteria });
  }
  doSearch(e) {
    e.preventDefault();
    if (this.isSearchCriteriaIsEmpty()) {
      alert("Enter search criteria 23");
    } else {
      console.log("will do get call with", this.state.criteria);
      if (this.props.getCustomers) {
        this.props.getCustomers(this.state.criteria);
      }

      //make get call here
    }
  }

  onReset(e) {
    e.preventDefault();

    if (!this.isSearchCriteriaIsEmpty()) {
      console.log("crieteria is not empty");
      let resetCriteria = {
        firstName: "",
        lastName: "",
        email: "",
        postalCode: "",
        phoneNumber: "",
        pageNumber: 0,
        limit: 15,
        requireCount: false
      };
      this.setState({
        criteria: resetCriteria
      });
    } else {
      console.log("crieteria is  empty");
      return;
    }
  }
  isSearchCriteriaIsEmpty() {
    let criteria = {
      ...this.state.criteria
    };
    let result = "";
    for (let key in criteria) {
      result = result + criteria[key];
      console.log("---->", result);
    }
    return result ? false : true;
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="form-group col-md-4">
              <input
                onChange={this.onChange.bind(this)}
                value={this.state.criteria.firstName}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                onChange={this.onChange.bind(this)}
                value={this.state.criteria.lastName}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <input
                onChange={this.onChange.bind(this)}
                value={this.state.criteria.email}
                name="email"
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                onChange={this.onChange.bind(this)}
                value={this.state.criteria.postalCode}
                name="postalCode"
                type="text"
                className="form-control"
                placeholder="Zip code"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <input
                onChange={this.onChange.bind(this)}
                value={this.state.criteria.phoneNumber}
                name="phoneNumber"
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4" />
            <div className="form-group col-md-4" />
            <div className="form-group col-md-2" />
            <div className="form-group col-md-1">
              <button
                type="button"
                onClick={this.onReset.bind(this)}
                className="btn btn-secondary"
              >
                Reset
              </button>
            </div>
            <div className="form-group col-md-0.75">
              <button
                onClick={this.doSearch.bind(this)}
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchCriteria;
