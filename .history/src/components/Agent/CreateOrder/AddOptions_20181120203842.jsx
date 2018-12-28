import React, { Component } from "react";

export default class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuId: "",
      productName: ""
    };
  }

  onChange(e) {
    let key = e.target.name;
    let value = e.target.name;
    let newState = { ...this.state };
    newState[key] = value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-mod-3">
            <input name="skuId" type="text" id="sku-search" />
            <button className="btn">By SKU</button>
          </div>
          <div className="col-mod-1" />
          <div className="col-mod-3">
            <input name="productName" type="text" id="product-search" />
            <button className="btn ">By Name</button>
          </div>
          <div className="col-mod-1" />
          <div className="col-mod-3">
            <button className="btn ">Browse Catalog</button>
          </div>
        </div>
      </div>
    );
  }
}
