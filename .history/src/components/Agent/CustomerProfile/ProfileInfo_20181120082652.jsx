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
    return <div className="container">
      <h3> Customer Profile</h3>
      <div className="form-group">
        <label htmlFor="firstName">FirstName</label>
        <input name="firstName" id="firstName" type="text" onChange={this.onChange.bind(this)} value={this.props.firstName} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">LastName</label>
        <input name="lastName" id="lastName" type="text" onChange={this.onChange.bind(this)} value={this.props.lastName} />
      </div>
      <div className="form-group">
        <input name="email" type="text" onChange={this.onChange.bind(this)} value={this.props.email} />
      </div>
    </div>
      <div className="form-group">

        <button>Save</button>

      </div>
      
</div >
  }
}
