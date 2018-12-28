import React, { Component } from "react";

export default class ShippingMethods extends Component {
  constructor(props) {
    super(props);
  }

  onChange(e) {
    this.props.selectedMethod(e.target.value);
  }

  onClickingShippingMethod(e) {
    this.props.selectedMethod(e);
  }



  render() {
    if (typeof this.props.shippingMethodsList === "undefined") {
      return null;
    }
    var sm = this.props.shippingMethodsList.map(function(method) {
      return (
        <option key={method.getId()} value={method.getId()}>
          {method.getDisplayName()}
        </option>
      );
    });
  var sm1 = this.props.shippingMethodsList.map(function (method) {
    return <a class="dropdown-item" key={method.getId()} href="#" onClick={this.onClickingShippingMethodmethod.getId()}>
        {method.getDisplayName()}
      </a>;
  });
    console.log("------>Sm Array", sm);
    return (
      <div>
        <div className="form-group col-sm-6">
          <select
            className="col-md-12 form-control"
            name="country"
            id="addressBook-scountry"
            aria-required="true"
            onChange={this.onChange.bind(this)}
          >
            {sm}
          </select>
        </div>

        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shipping Methods...
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           
          </div>
        </div>
      </div>
    );
  }
}

var shipipingMethodProp = {
  resp: "",
  getDisplayName: function() {
    return this.resp.displayName;
  },
  getId: function() {
    return this.resp.id;
  },
  getShippingCost: function(subTotal) {
    subTotal = +subTotal;
    var ranges = this.resp.ranges;
    for (var i = 0, n = ranges.length; i < n; i++) {
      var low = ranges[i].low;
      var high = ranges[i].high;
      var assocaiteCost = ranges[i].amount;
      console.log("---------------" + low);
      console.log("---------------" + high);
      console.log("---------------" + assocaiteCost);

      if (high === null && subTotal >= low) {
        return assocaiteCost;
      } else if (subTotal >= low && subTotal <= high) {
        return assocaiteCost;
      }
    }
  },
  isEligibleForProductWithSurcharges: function() {
    return this.resp.eligibleForProductWithSurcharges === null ? false : true;
  }
};
