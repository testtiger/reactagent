import React, { Component } from "react";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";

export default class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuId: "",
      productName: "",
      response: "",
      errorMessage: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    let newState = { ...this.state };
    newState[key] = value;
    console.log(newState);
    this.setState({ ...newState });
  }
 
  addByProductName(produtName) {
      
  }
  render() {
    var props=this.props;
    return <div className="container">
        <div className="row">
          <div className="col-mod-4">
            <input name="skuId" type="text" id="sku-search" onChange={this.onChange} />
          <button className="btn" onClick={props.addBySku.bind(prop.receiver, this.state.skuId)}>
              By SKU
            </button>
          </div>

          <div className="col-mod-4">
            <input name="productName" type="text" id="product-search" onChange={this.onChange} />
            <button className="btn">By Name</button>
          </div>

          <div className="col-mod-4">
            <button className="btn">Browse Catalog</button>
          </div>
        </div>
      </div>;
  }
}
