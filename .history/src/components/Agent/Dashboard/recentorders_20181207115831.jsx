import React, { Component } from "react";

function TableHeader() {
  return (
      <thead className="thead-light">
      <tr>
        <th scope="col">Order Id</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Order Total</th>
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

class RecentOrders extends Component {
  
  

  render() {
    return <div className="table-responsive">
        <h3>Recent orders</h3>
        <table className="table table-bordered table-responsive">
          <TableHeader />
          <TableBody recentOrdersList={this.props.recentOrders ? this.props.recentOrders : []} />
        </table>
      </div>;
  }
}

export default RecentOrders;
