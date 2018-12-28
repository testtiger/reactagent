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
  isCreteriaEmpty(){
    this.
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
              <button type="button" className="btn btn-secondary">
                Reset
              </button>

              <button type="submit" className="btn btn-primary">
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