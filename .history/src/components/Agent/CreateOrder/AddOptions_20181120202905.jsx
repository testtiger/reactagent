

import React, { Component } from 'react'

export default class AddOptions extends Component {
  render() {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-mod-4">
                      <input type="text" id="sku-search" />
                      <button className=".btn">BySKU</button>
                  </div>
                  <div className="col-mod-4">
                      <input type="text" id="product-search" />
                      <button className=".btn">By Name</button>
                  </div>
                  <div className="col-mod-4">
                      <button className=".btn">Browse Catalog</button>
                  </div>
              </div>
          </div>
      );
  }
}

