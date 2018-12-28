import React, { Component } from "react";

export default class AddressFields extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        shippingAddress: {
            alias: 'Home'
             firstName: 'S',
            state: 'New York',
            email: 'yuvi@example1544511307389.com',
            stateName: 'New York',
            isDefaultBillingAddress: false,
            isDefaultShippingAddress: false,
            isDefaultAddress: false,
            lastName: 'Man'
            country: 'United States',
            selectedCountry: 'US',
            selectedState: 'NY',
            state_ISOCode: 'US-NY',
            selectedCountry: 'US',
            selectedState: 'NY',
            state_ISOCode: 'US-NY',
            address3: '',
            address2: 'down town',
            city: 'Manhattan',
            prefix: '',
            address1: 'city street',
            postalCode: '10007',
            companyName: '',
            jobTitle: '',
            county: '',
            suffix: '',
           
            phoneNumber: '',
            faxNumber: '',
            middleName: '',
            type: '',
            
           
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

  render() {
    return <div className="row">
        <div className="col-sm-8">
          <legend>Shipping Address :</legend>
          <div className="row first-row">
            <div className="form-group col-sm-3">
              <input type="text" class="col-md-12 form-control" name="firstName" id="addressBook-firstname" aria-required="true" required="required" placeholder="First Name" />
            </div>
            <div className="form-group col-sm-3">
              <input type="text" class="col-md-12 form-control" name="lasttName" id="addressBook-lastname" aria-required="true" required="required" placeholder="last Name" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <select class="col-md-12 form-control" name="country" id="addressBook-scountry" aria-required="true">
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
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input type="text" class="col-md-12 form-control" name="addressLine1" id="addressBook-address1" aria-required="true" required="required" placeholder="Address Line 1" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input type="text" class="col-md-12 form-control" name="addressLine2" id="addressBook-saddress2" aria-required="true" required="required" placeholder="Address Line 2" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input type="text" class="col-md-12 form-control" name="county" id="addressBook-county" aria-required="true" required="required" placeholder="county" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-3">
              <input type="text" class="col-md-12 form-control" name="city" id="addressBook-city" aria-required="true" required="required" placeholder="city" />
            </div>
            <div className="form-group col-sm-3">
              <select class="col-md-12 form-control" name="state" id="CC-checkoutAddressBook-sstate" aria-required="true">
                <option value="">State/Region</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GU">Guam</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UM">US Minor Outlying Islands</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="VI">Virgin Islands</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-3">
              <input type="text" class="col-md-12 form-control" name="zip" id="addressBook-zip" aria-required="true" required="required" placeholder="zip" />
            </div>
            <div className="form-group col-sm-3">
              <input type="text" class="col-md-12 form-control" name="phoneNumber" id="addressBook-phoneNumber" aria-required="true" required="required" placeholder="phoneNumber" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <legend>Select your Shipping Method :</legend>
          <div className="row">
            <div className="form-group col-sm-6">
              <select class="col-md-12 form-control" name="country" id="addressBook-scountry" aria-required="true">
                <option value="">Shipping methods...</option>
                        <option value="Standard">Standard</option>
                <option value="AU">Priority</option>
                <option value="BD">Free Shipping</option>
                <option value="AR">Two Day</option>
                <option value="AR">Ground</option>
                        <option value="AR">Overnight</option>
              </select>
            </div>
          </div>
        </div>
      </div>;
  }
}
