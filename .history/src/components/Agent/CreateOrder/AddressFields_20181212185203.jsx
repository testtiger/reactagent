import React, { Component } from 'react'

export default class AddressFields extends Component {
  render() {
    return (
        <div className="row first-row">
            <div className="form-group col-sm-4">
                <input type="text" class="col-md-12 form-control sf-error" name="sFirstName" id="CC-checkoutAddressBook-sfirstname" aria-required="true" data-bind="validatableValue: firstName, widgetLocaleText : {value:'firstNameText', attr:'placeholder'}, css: {'sf-error' : firstName ? ! firstName.__valid__() : false} " required="required" placeholder="First Name">
            </div>
        
      </div>
    )
  }
}
