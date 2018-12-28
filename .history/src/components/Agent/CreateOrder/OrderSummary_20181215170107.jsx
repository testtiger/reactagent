import React, { Component } from "react";

class OrderSummary extends Component {
  render() {
    return (
      <div>
        <div className="col" />
        <div className="col" />
        <div className="col">
          <div className="text-left font-weight-bold">
            SubTotal : {this.props.subTotal}
          </div>
          <div className="text-left font-weight-bold">Shipping : {0.0}</div>
          <div className="text-left font-weight-bold">Tax : {0.0}</div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;
