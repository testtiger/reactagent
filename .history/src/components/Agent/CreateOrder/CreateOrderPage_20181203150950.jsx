import React from "react";
import Cart from "./Cart";
import AddOptions from "./AddOptions";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";
export default class CreateOrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: "",
      response: "",
      errorMessage: ""
    };
  }

  restorDefaultState() {
    this.setState({
      profileId: "",
      response: "",
      errorMessage: ""
    });
  }

  addByProductName(productName) {
    if (!productName) {
      return;
    }
    alert(productName);
    var resp = this.state.response;
  }

  addBySku(skuId) {
    if (!skuId) {
      return;
    }
    alert(skuId);

    var self = this; //inside promise this will not work so store it as self

    let queryParams = { showNotForIndividualSale: false };
    var headers = { Authorization: sessionStorage.getItem("token") };
    makeGetCall(getURIList()["GET_SKU"] + skuId, headers, queryParams).then(
      resp => {
        console.log(" response  ============>", resp);
        if (resp.items) {
          var response = this.state.response;
          response.push(response);
          self.setState({ response: resp });
          console.log(self.state);
        }
        if (resp.errorCode) {
          self.setState({ errorMessage: resp.message });
        }
      }
    );
  }
  getAddOptionsTemplate() {
    return (
      <div className="row">
        <AddOptions
          addBySku={this.addBySku.bind(this)}
          addByName={this.addByProductName.bind(this)}
        />
      </div>
    );
  }
  getShoppingCartTemplate() {
    var CartElement =
      this.state.response.length > 0 ? (
        <Cart resp={this.state.response} />
      ) : null;
    return (
      <React.Fragment>
        <div className="row">
          <h5>Shopping cart</h5>
        </div>
        <hr />
        <div className="row">{CartElement}</div>
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="container">
        <h3>Create Order</h3>
        <hr />
        {this.getAddOptionsTemplate()}
        <hr />
        {this.getShoppingCartTemplate()}
      </div>
    );
  }
}