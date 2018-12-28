import React, { Component } from "react";

export default class CartItems extends Component {
  render() {
    return (
      <div>
        <label>SKU</label>
        <input type="text" id="sku-search" />
      </div>
    );
  }
}
