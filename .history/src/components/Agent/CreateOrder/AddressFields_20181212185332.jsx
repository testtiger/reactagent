import React, { Component } from 'react'

export default class AddressFields extends Component {
  render() {
    return (
        <div className="row first-row">
            <div className="form-group col-sm-4">
                <input type="text" class="col-md-12 form-control" name="firstName" id="addressBook-sfirstname" aria-required="true" required="required" placeholder="First Name"/>
                <div className="form-group col-sm-4">
                    <input type="text" class="col-md-12 form-control" name="lasttName" id="CC-checkoutAddressBook-sfirstname" aria-required="true" required="required" placeholder="First Name" />
                </div>
            </div>
        
      </div>
    )
  }
}
