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
      </div>
          <div className="form-group">
        <input name="email" type="text" onChange={this.onChange.bind(this)} value={this.props.email} />
      </div>
      <div className="form-group">
        <button>Save</button>
      </div>
      
</div >
  }
}
