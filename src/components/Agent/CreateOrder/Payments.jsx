import React, { Component } from "react";

export default class Payments extends Component {
  render() {
    return (
      <div>
        <div class="form-group col-sm-4">
          <input
            aria-required="true"
            type="text"
            className="col-md-12 form-control"
            id="nameOnCard"
            name="nameOnCard"
            placeholder="Name on Card"
            required="required"
          />
        </div>
        <div class="form-group col-sm-4">
          <select
            aria-required="true"
            type="text"
            class="col-md-12 form-control"
            id="cardType"
            name="cardType"
          >
            <option value="">Card Type</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <input
            aria-required="true"
            type="text"
            class="col-md-12 form-control"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card Number"
            required="required"
          />
        </div>
        <div class="form-group col-sm-4">
          <input
            aria-required="true"
            type="password"
            class="col-md-12 form-control "
            id="CC-splitPayments-cardCVV"
            name="cardCVV"
            placeholder="CVV"
            required="required"
          />
        </div>
        <div class="form-group col-sm-4">
          <select
            aria-required="true"
            type="text"
            class="col-md-12 form-control"
            id="CC-splitPayments-endMonth"
            name="endMonth"
          >
            <option value="">Expires (Month)</option>
            <option value="01">01 - January</option>
            <option value="02">02 - February</option>
            <option value="03">03 - March</option>
            <option value="04">04 - April</option>
            <option value="05">05 - May</option>
            <option value="06">06 - June</option>
            <option value="07">07 - July</option>
            <option value="08">08 - August</option>
            <option value="09">09 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>
            <option value="12">12 - December</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <select
            aria-required="true"
            type="text"
            class="col-md-12 form-control"
            id="endYear"
            name="endYear"
          >
            <option value="">Expires (Year)</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    );
  }
}
