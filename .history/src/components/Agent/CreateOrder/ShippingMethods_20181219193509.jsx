import React, { Component } from "react";

export default class ShippingMethods extends Component {
    constructor(props) {
        super(props);
    }
    showShippingMethods() {
        this.setState({ showShippingMethods: true });
    }

    onChange(e) {
        this.props.selectedMethod(e.target.value)
      
    }

 
    render() {
        if (this.props.shippingMethodsList.length>0) {
          var sm = this.props.shippingMethodsList.items.map(function(method
          ) {
            return (
              <option key={method.getId()} value={method.getId()}>
                {method.getDisplayName()}
              </option>
            );
          });
          console.log("------>Sm Array", sm);
          return <div>
              <div className="col-sm-4">
                <h5>Select your Shipping Method :</h5>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <select className="col-md-12 form-control" name="country" id="addressBook-scountry" aria-required="true" onChange={this.onChange.bind(this)}>
                      {sm}
                    </select>
                  </div>
                </div>
              </div>
            </div>;
        } else {
          return <div>
              <a onClick={this.showShippingMethods.bind(this)} className="btn btn-primary" href="#" role="button">
                ShippingMethods >
              </a>
              <button onClick={this.showShippingMethods.bind(this)}>
                ShippingMethods
              </button>
            </div>;
        }
    }
}

var shipipingMethodProp = {
    resp: "",
    getDisplayName: function () {
        return this.resp.displayName;
    },
    getId: function () {
        return this.resp.id;
    },
    getShippingCost: function (subTotal) {
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
    isEligibleForProductWithSurcharges: function () {
        return this.resp.eligibleForProductWithSurcharges === null ? false : true;
    }
};
