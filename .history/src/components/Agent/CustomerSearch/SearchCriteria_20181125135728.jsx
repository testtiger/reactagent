import React, { Component } from "react";

class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
        phone: ""
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
  onClick(e) {
    e.or
    e.preventDefault();
    if (this.isSearchCriteriaIsEmpty()) {
      alert("Enter search criteria");
    } else {
      alert("will do get call wih", this.state.criteria);
      //make get call here
    }
  }

  onReset() {
    if (!this.isSearchCriteriaIsEmpty()) {
      this.setState = {
        criteria: {
          firstName: "",
          lastName: "",
          email: "",
          zipCode: "",
          phone: ""
        }
      };
    } else {
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
        <h3>Customer Search</h3>
        <hr />
        <div className="row" />
        <form>
          <div className="row">
            <div className="form-group col-md-3">
              <input
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="form-group col-md-3">
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-3">
              <input
                name="zipCode"
                type="text"
                className="form-control"
                placeholder="Zip code"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <input
                name="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3" />
            <div className="form-group col-md-3" />
            <div className="form-group col-md-3">
              <button className="btn btn-secondary">Reset</button>

              <button
                onClick={this.onClick.bind(this)}
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
