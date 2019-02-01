import React, { Component } from "react";

export default class AddressFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAddress: {
        alias: "123",
        firstName: "",
        lastName: "",
        email: "some1@gmail.com",
        address1: "",
        address2: "",
        county: "",
        city: "",
        state: "",
        postalCode: "",
        selectedCountry: "",
        country: "United States",
        phoneNumber: "",
        isDefaultBillingAddress: false,
        isDefaultShippingAddress: false,
        isDefaultAddress: false
      }
    };
  }

  fillAddressForTesting() {
    var newCriteria = {
      alias: "123",
      firstName: "Diwakara",
      lastName: "k",
      email: "some1@gmail.com",
      address1: "line1",
      address2: "line2",
      county: "some county",
      city: "alabama",
      state: "AL",
      postalCode: "36006",
      country: "United States",
      phoneNumber: "789456123",
      selectedCountry: "US",
      isDefaultBillingAddress: false,
      isDefaultShippingAddress: false,
      isDefaultAddress: false
    };
    this.setState({ shippingAddress: newCriteria });
    this.props.addAddress(newCriteria);
  }
  onChange(e) {
    let newCriteria = { ...this.state.shippingAddress };
    let key = e.target.name;
    let value = e.target.value;
    newCriteria[key] = value;
    this.setState({ shippingAddress: newCriteria });
  }

  updateAddress() {
    this.props.addAddress(this.state.shippingAddress);
  }

  isShippingAddressValid(address) {
    let emptyString = "";
    for (let p in address) {
      if (address[p] === emptyString) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <div className="col-sm-7">
        <h5>{this.props.type} :</h5>
        <div className="row first-row">
          <div className="form-group col-sm-3">
            <input
              value={this.state.shippingAddress.firstName}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="firstName"
              id="addressBook-firstname"
              aria-required="true"
              required="required"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-sm-3">
            <input
              value={this.state.shippingAddress.lastName}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="lastName"
              id="addressBook-lastname"
              aria-required="true"
              required="required"
              placeholder="last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <select
              value={this.state.shippingAddress.selectedCountry}
              onChange={this.onChange.bind(this)}
              class="col-md-12 form-control"
              name="selectedCountry"
              id="addressBook-scountry"
              aria-required="true"
            >
              <option value="">Country</option>
              <option value="US">United States</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <input
              value={this.state.shippingAddress.address1}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="address1"
              id="addressBook-address1"
              aria-required="true"
              required="required"
              placeholder="Address Line 1"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <input
              value={this.state.shippingAddress.address2}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="address2"
              id="addressBook-saddress2"
              aria-required="true"
              required="required"
              placeholder="Address Line 2"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <input
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="county"
              id="addressBook-county"
              aria-required="true"
              required="required"
              placeholder="county"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-3">
            <input
              value={this.state.shippingAddress.city}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="city"
              id="addressBook-city"
              aria-required="true"
              required="required"
              placeholder="city"
            />
          </div>
          <div className="form-group col-sm-3">
            <select
              value={this.state.shippingAddress.state}
              onChange={this.onChange.bind(this)}
              class="col-md-12 form-control"
              name="state"
              id="CC-checkoutAddressBook-sstate"
              aria-required="true"
            >
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
            <input
              value={this.state.shippingAddress.postalCode}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="postalCode"
              id="addressBook-zip"
              aria-required="true"
              required="required"
              placeholder="zip"
            />
          </div>
          <div className="form-group col-sm-3">
            <input
              value={this.state.shippingAddress.phoneNumber}
              onChange={this.onChange.bind(this)}
              type="text"
              class="col-md-12 form-control"
              name="phoneNumber"
              id="addressBook-phoneNumber"
              aria-required="true"
              required="required"
              placeholder="phoneNumber"
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={this.updateAddress.bind(this)}
        >
          Update Adress
        </button>
        <button onClick={this.fillAddressForTesting.bind(this)}>
          AddAdressForTesting
        </button>
      </div>
    );
  }
}

/***
 * Other Address payload attributes
 * 
 * 
  
 address3: '',
            prefix: '',
            companyName: '',
            jobTitle: '',
            county: '',
            suffix: '',
            faxNumber: '',
            middleName: '',
            type: '',
 */

/***
  * countrey options
  * 
  
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

  */
