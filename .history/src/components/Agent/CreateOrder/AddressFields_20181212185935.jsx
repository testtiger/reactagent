import React, { Component } from 'react'

export default class AddressFields extends Component {
  render() {
    return <div>
        <div className="row first-row">
          <div className="form-group col-sm-4">
            <input type="text" class="col-md-12 form-control" name="firstName" id="addressBook-firstname" aria-required="true" required="required" placeholder="First Name" />
            <div className="form-group col-sm-4">
              <input type="text" class="col-md-12 form-control" name="lasttName" id="addressBook-lastname" aria-required="true" required="required" placeholder="last Name" />
            </div>
          </div>
        </div>
        <div className="row">
          <select class="col-md-12 form-control" name="sCountry" id="addressBook-scountry" aria-required="true">
            <option value="">Country</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="BD">Bangladesh</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="FO">Faroe Islands</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="MX">Mexico</option>
            <option value="PA">Panama</option>
            <option value="PE">Peru</option>
            <option value="LK">Sri Lanka</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
          </select>
        </div>
        <div className="row">
            <input type="text" class="col-md-12 form-control" name="sAddressLine1" id="addressBookaddress1" aria-required="true" required="required" placeholder="Address Line 1" />
        </div>
        <div className="row">
            <input type="text" class="col-md-12 form-control" name="sAddressLine2" id="addressBook-saddress2" aria-required="true" required="required" placeholder="Address Line 2" />
        </div>
        <div className="row">
          <input type="text" class="col-md-12 form-control" name="county" id="addressBook-county" aria-required="true" required="required" placeholder="Address Line 2" />
        </div>
      </div>;
    
  }
}
