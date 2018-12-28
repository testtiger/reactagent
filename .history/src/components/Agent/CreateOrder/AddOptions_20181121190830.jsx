import React, { Component } from "react";
import { makeGetCall,getURIList} from "../Rest/agent-rest-client";

export default class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuId: "",
      productName: ""
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
  addBySku(skuId) {


    //?showNotForIndividualSale=false
      var headers = { Authorization: sessionStorage.getItem("token") };
      makeGetCall(getURIList()["GET_SKU"] + skuId, headers).then(response => {
        console.log(" response  ============>", response);
        if (response.id) {
          self.setState({ profileId: response.id });
        }
        if (response.errorCode) {
          self.setState({ errorMessage: response.message });
        }
      });
  }
  addByProductName(produtName) {

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-mod-4">
            <input
              name="skuId"
              type="text"
              id="sku-search"
              onChange={this.onChange}
            />
            <button className="btn">By SKU</button>
          </div>

          <div className="col-mod-4">
            <input
              name="productName"
              type="text"
              id="product-search"
              onChange={this.onChange}
            />
            <button className="btn">By Name</button>
          </div>

          <div className="col-mod-4">
            <button className="btn">Browse Catalog</button>
          </div>
        </div>
      </div>
    );
  }
}
