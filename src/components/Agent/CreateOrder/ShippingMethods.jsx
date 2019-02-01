import React, { Component } from "react";

export default class ShippingMethods extends Component {
 

  onChange(e) {
    this.props.selectedMethod(e.target.value);
  }

  onClickingShippingMethod(e) {
    this.props.selectedMethod(e);
  }

  render() {
    /***var self = this;

    let shippingOptions = null;
    if (
      this.state.availableShippingMethods.length > 0 &&
      this.state.shippingAddress
    ) {
      var sm = this.state.availableShippingMethods.map(function(method) {
        return (
          <option key={method.getId()} value={method.getId()}>
            {method.getDisplayName()}
          </option>
        );
      });
      shippingOptions = (
        <select onChange={this.selectedShippingMethod.bind(this)}>{sm}</select>
      );
    } else {
      shippingOptions = (
        <select onClick={this.populateShippingMethods.bind(this)}>
          <option>Select shipping method...</option>
        </select>
      );
    }
 */
    var self = this;
    let shippingOptions = null;
    if (this.props.shippingMethodsList.length > 0) {
      var sm = this.props.shippingMethodsList.map(function(method) {
        return (
          <option key={method.getId()} value={method.getId()}>
            {method.getDisplayName()}
          </option>
        );
      });
      shippingOptions = <select onChange={this.props.onChange.bind(this)}>
          {sm}
        </select>;
      return shippingOptions;
    } else {
      return <button
        onClick={this.props.loadShippingMethods.bind(this)}
        >
          Load Shipping Methods...
        </button>;
    }

    //return sm;
  }

  /* render() {
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
    console.log("------>Sm Array", sm);
    return <div>
        <div className="form-group col-sm-6">
          <select className="col-md-12 form-control" name="country" id="addressBook-scountry" aria-required="true" onChange={this.onChange.bind(this)}>
            {sm}
          </select>
        </div>
      </div>;
  } */
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
