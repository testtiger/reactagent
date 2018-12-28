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
            <button className="btn btn-primary">By SKU</button>
          </div>
                <div className="col-mod-1"/>
          <div className="col-mod-4">
            <input name="productName" type="text" id="product-search" />
            <button className="btn btn-primary">By Name</button>
          </div>
          <div className="col-mod-4">
            <button className="btn btn-primary">Browse Catalog</button>
          </div>
        </div>
      </div>
    );
  }
}
