import React, { Component } from "react";
import LineItem from "./LineItem";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.lineItems
    };
  }

  componentDidMount() {

  }
  render() {
    var cartContent = [];
    cartContent = this.state.items.map(function (item) {
      console.log(item);
      return MakeLineItem(item);
    });
    return (
      <div className="container">
        <div className="row">
          <h5>Shopping cart</h5>
        </div>
        <hr />
        <div className="row">
          <table className="table">
            <TableHeader />
            <tbody>{cartContent}</tbody>
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

function MakeLineItem(props) {
  if (!props) {
    return null;
  }

  return <LineItem item={props} />;
}
function ComplexLineItem(props) { }

function lookup() {
  return this.resp.items[0].parentProducts[0];
}
function updateQuantity(newQuantity) {
  this.quantity = newQuantity;
}
function skuId() {
  console.log("-------------->", this.resp.items);
  return this.lookup().childSKUs[0].repositoryId;
}
var lineItem = {
  lookup: function () {
    return this.resp.items[0].parentProducts[0];
  },
  quantity: 1,
  updateQuantity: function (newQuantity) {
    this.quantity = newQuantity;
  },
  skuId: function () {
    console.log("-------------->", this.resp.items);
    return this.lookup().childSKUs[0].repositoryId;
  },
  id: function () {
    return this.lookup().id;
  },
  displayName: function () {
    return this.lookup().displayName;
  },
  listPrice: function () {
    return this.lookup().listPrice;
  },
  salePrice: function () {
    return this.lookup().salePrice;
  },
  shippingSurcharge: function () {
    return this.lookup().shippingSurcharge;
  },
  status: function () {
    return this.lookup().active;
  }
};