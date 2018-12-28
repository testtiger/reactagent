import React, { Component } from "react";

export default class LineItem extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: this.props.item.quantity() };
  }

  validateQuantity(quantity) {
    if (typeof quantity === "string" || typeof quantity === "number") {
      quantity = +quantity;
      if (quantity !== quantity || quantity <= 0) {
        //check for NAN
        quantity = 1;
      }
    }
    return quantity;
  }
  onQuantityChange(e) {
    let quantity = +e.target.value;
    quantity = this.validateQuantity(quantity);
    this.setState({ quantity: quantity });
    // alert(quantity);
    this.props.item.updateQuantity(quantity);
  }
  onClickRemove(skuId) {
    // alert(skuId);
    console.log("Clicked on remove", skuId);
    this.props.item.remove(skuId);
    // this.props.conf.removeItem(skuId);
  }
  render() {
    console.log("this.props.item--------<>", this.props.item);
    let skuId = this.props.item.skuId();
    //this.props.conf.removeItem(skuId)
    let productName = this.props.item.displayName();
    let salePrice = this.props.item.salePrice();
    let listPrice = this.props.item.listPrice();
    let shippingSurcharge = this.props.item.shippingSurcharge();
    let productId = this.props.item.productId();
    let status = this.props.item.status();

    let priceToDisplay = +(salePrice ? salePrice : listPrice);

    let quantity = this.props.item.quantity();

    return <tr>
        <td scope="col">
          <span>{productName}</span>
          <br />
          <span>{productId}</span>
          <br />
          <span>{skuId}</span>
        </td>
        <td scope="col">
          <input type="text" value={quantity} onChange={this.onQuantityChange.bind(this)} />
        </td>
        <td scope="col">
          <span>{1 + "@" + priceToDisplay}</span>
        </td>
        <td scope="col">
          <span>{quantity * priceToDisplay}</span>
        </td>
        <td scope="col">
          <button onClick={this.onClickRemove.bind(this, skuId)}>
            Remove
          </button>
        </td>
      </tr>;
  }
}
