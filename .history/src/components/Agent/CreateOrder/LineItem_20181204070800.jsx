import React, { Component } from "react";

export default class LineItem extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }

  validateQunatity(quantity){
    if (typeof quantity === "string" || typeof quantity === "number") {
      quantity = +quantity;
      if (quantity !== quantity || quantity === 0) {//check for NAN 
        quantity = 1;
      }
    }
    return quantity;
  }
  onQuantityChange(e) {
    let quantity = +e.target.value;
    quantity = this.validateQunatity(quantity)
    this.setState({ quantity: quantity });
  }
  render() {
    let lineItemKey = this.props.conf.id;
    let props = this.props.conf.details;
    let skuId = props.childSKUs[0].repositoryId;
    let productName = props.displayName;
    let salePrice = props.salePrice;
    let listPrice = props.listPrice;
    let shippingSurcharge = props.shippingSurcharge;
    let productId = props.id;
    let status = props.active;

    let priceToDisplay = +(salePrice ? salePrice : listPrice);

    let quantity = this.state.quantity;

    return <tr key={key}>
        <td scope="col">
          <span>{productName}</span>
          <br />
          <span>{productId}</span>
          <br />
          <span>{skuId}</span>
        </td>
        <td scope="col">
          <input type="text" value={this.state.quantity} onChange={this.onQuantityChange.bind(this)} />
        </td>
        <td scope="col">
          <span>{1 + "@" + priceToDisplay}</span>
        </td>
        <td scope="col">
          <span>{quantity * priceToDisplay}</span>
        </td>
      </tr>;
  }
}
