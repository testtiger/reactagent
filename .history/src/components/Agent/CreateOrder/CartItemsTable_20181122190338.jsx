import React, { Component } from "react";

export default class CartItemsTable extends Component {
  constructor(props) {
    super(props);
  }

  ccartIte
  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <TableHeader />
            <TableBody />
          </table>
        </div>
      </div>
    );
  }
}

function TableHeader() {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Item Total</th>
      </tr>
    </thead>
  );
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
