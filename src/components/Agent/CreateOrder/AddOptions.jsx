import React, { Component } from "react";

export default class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuId: "",
      productName: "",
      response: "",
      validationMessage: {
        forSku: "",
        forName: ""
      }
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

  validationMessages() {
    var validationMessageSpan = this.state.validationMessage.forSku ? (
      <span>{this.state.validationMessage.forSku}</span>
    ) : null;
  }
  render() {
    var props = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-mod-4">
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Search by SKU"
                aria-label="Search"
                aria-describedby="basic-addon2"
                name="skuId"
                type="text"
                id="sku-search"
                onChange={this.onChange}
              />
              <div class="input-group-append">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.addBySku(this.state.skuId);
                  }}
                >
                  Add BY SKU
                </button>
              </div>
            </div>
          </div>

          <div className="col-mod-4">
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Search By Name"
                aria-label="Search"
                aria-describedby="basic-addon2"
                name="productName"
                type="text"
                id="product-search"
                onChange={this.onChange}
              />
              <div class="input-group-append">
                <button
                  className="btn btn-outline-primary"
                  disabled="disabled"
                  onClick={() => {
                    props.addByName(this.state.productName);
                  }}
                >
                  By Name
                </button>
              </div>
            </div>
          </div>

          <div className="col-mod-4">
            <button disabled="disabled" className="btn">
              Browse Catalog
            </button>
          </div>
        </div>
      </div>
    );
  }
}
