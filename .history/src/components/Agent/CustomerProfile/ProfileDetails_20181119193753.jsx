import React, { Component } from 'react'

export default class ProfileDetails extends Component {

  
  //firstName
  //lastName
  //emailid
  //Email prefrences
  //CreateNewOrder Link
  // Save Changes
    render() {

    return (

      <div>
          <h3> Customer Profile</h3>
          <div></div>
            <label htmlFor="firstName">firstName</label>
          <input type="text" value={this.props.firstName}/>
            <input type="text" value={this.props.firstName} />
            <input type="text" value={this.props.firstName} />
        
      </div>
    )
  }
}
