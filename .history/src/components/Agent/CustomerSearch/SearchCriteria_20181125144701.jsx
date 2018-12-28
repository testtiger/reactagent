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
  doSearch(e) {
    e.preventDefault();
    if (this.isSearchCriteriaIsEmpty()) {
      alert("Enter search criteria 23");
    } else {
      console.log("will do get call with", this.state.criteria);
      //make get call here
    }
  }

  onReset(e) {
    e.preventDefault();

    if (!this.isSearchCriteriaIsEmpty()) {
      let resetCriteria =  {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
        phone: ""
        }
      this.setState = {
        criteria: resetCriteria
      };
    }
     else {
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
    return <div className="container">
        <h3>Customer Search</h3>
        <hr />
        <div className="row" />
        <form>
          <div className="row">
            <div className="form-group col-md-3">
              <input onChange={this.onChange.bind(this)} value={this.state.criteria.firstName} name="firstName" type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="form-group col-md-3">
            <input onChange={this.onChange.bind(this)}  value={this.state.criteria.lastName} name="lastName" type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
            <input onChange={this.onChange.bind(this)}  value={this.state.criteria.email} name="email" type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group col-md-3">
            <input onChange={this.onChange.bind(this)}  value={this.state.criteria.zipCode} name="zipCode" type="text" className="form-control" placeholder="Zip code" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
            <input onChange={this.onChange.bind(this)} value={this.state.criteria.phone} name="phone" type="text" className="form-control" placeholder="Phone Number" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3" />
            <div className="form-group col-md-3" />
            <div className="form-group col-md-3">
              <button onClick={this.onReset.bind(this)} className="btn btn-secondary">
                Reset
              </button>

              <button onClick={this.doSearch.bind(this)} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}

export default SearchCriteria;
