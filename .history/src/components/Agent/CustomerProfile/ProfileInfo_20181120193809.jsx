import React, { Component } from "react";

export default class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ name: value });
  }
  render() {
    return (

      <div className="container">
        <h3>Register Customer</h3>

        <hr />

        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="firstName">FirstName</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              onChange={this.onChange.bind(this)}
              value={this.props.firstName}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="lastName">LastName</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              onChange={this.onChange.bind(this)}
              value={this.props.lastName}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              onChange={this.onChange.bind(this)}
              value={this.props.email}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="receiveEmail">
              <input
                name="receiveEmail"
                type="checkbox"
                id="receiveEmail"
                value={this.state.receiveEmail}
                onChange={this.onChange.bind(this)}
              />
              Receive Email
            </label>
          </div>
        </div>
        <div className="row">
          <button onClick={this.registerCustomer.bind(this)}>Register</button>
        </div>
      </div>
      //--------------------------------------
      <div className="container">
        
        <div className="form-group">
          <div className="form-group col-mod-3">
           
          </div>
          <div className="form-group col-mod-3">
            
          </div>
        </div>
        <div className="form-group">
         
        </div>
        <div className="form-group">
          <button>Save</button>
        </div>
      </div>
    );
  }
}
