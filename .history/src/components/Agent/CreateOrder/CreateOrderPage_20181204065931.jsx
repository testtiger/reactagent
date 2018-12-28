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
      endPointResponse => {
        console.log(" response  ============>", endPointResponse);
        if (endPointResponse.items) {
          self.setState({ response: endPointResponse });
          console.log(self.state);
        }
        if (endPointResponse.errorCode) {
          self.setState({ errorMessage: endPointResponse.message });
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
        <div className="row">{CartElement}</div>
      </React.Fragment>
    );
  }
  render() {
    var CartElement =
      this.state.response.length > 0 ? (
        <Cart resp={this.state.response} />
      ) : null;

    return (
      <div className="container">
        <h3>Create Order</h3>
        <hr />
        <AddOptions
          addBySku={this.addBySku.bind(this)}
          addByName={this.addByProductName.bind(this)}
        />

        /{this.getAddOptionsTemplate()}
        <hr />
        {this.getShoppingCartTemplate()}
        <div className="row">{CartElement}</div>
      </div>
    );
  }
}
