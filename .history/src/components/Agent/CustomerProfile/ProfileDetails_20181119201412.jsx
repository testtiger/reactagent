import React, { Component } from "react";

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(e) {
      var name=e.target.name
      var value =e.target.value;
      this.setState({ name:value});
  }
  render() {
    return (
      <div className="container">
        <h3> Customer Profile</h3>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="firstName">firstName</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={this.props.firstName}
            />
            <label htmlFor="firstName">firstName</label>
                    <input name="lastName" id="lastName" type="text" value={this.props.lastName} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <input name="email" type="text" onChange={this.onChange.bind(this)} value={this.props.email} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {
              //<button onClick={this.props.onClick()}>Save</button>
            }
          </div>
        </div>
      </div>
    );
  }
}
