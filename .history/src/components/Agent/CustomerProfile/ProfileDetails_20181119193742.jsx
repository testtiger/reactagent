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
          <label htmlFor="firstName"></label>
          <input type="text" value={this.props.firstName}/>
            <input type="text" value={this.props.firstName} />
            <input type="text" value={this.props.firstName} />
        
      </div>
    )
  }
}