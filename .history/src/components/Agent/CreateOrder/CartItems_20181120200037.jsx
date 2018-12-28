import React, { Component } from "react";

export default class CartItems extends Component {
  render() {
    return (
      <div>
        <input type="text" id="sku-search" />
        <button className=".btn">Add By SKU</button>
        <table className="table">
          <TableHeader />
          <TableBody
            recentOrdersList={
              this.props.recentOrders ? this.props.recentOrders : []
            }
          />
        </table>
      </div>
    );
  }
}

function TableHeader() {
  return <thead className="thead-light">
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Item Total</th>
      </tr>
    </thead>;
}

function TableBody(props) {
  props = props.recentOrdersList;
  var orderMapCallBack = function(order) {
    return (
      <tr key={order.orderId}>
        <th scope="col">{order.orderId}</th>
        <th scope="col">{order.customerName}</th>
        <th scope="col">{order.amount}</th>
      </tr>
    );
  };

  if (props) {
    return <tbody>{props.map(orderMapCallBack)}</tbody>;
  }
  return null;
}


