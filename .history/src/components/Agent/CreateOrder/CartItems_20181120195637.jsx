import React, { Component } from "react";

export default class CartItems extends Component {
  render() {
    return <div>
        <input type="text" id="sku-search" />
        <button>Add By SKU</button>
      </div>;
  }
}
