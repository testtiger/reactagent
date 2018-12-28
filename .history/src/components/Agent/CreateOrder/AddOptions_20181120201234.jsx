import React from "react";

export default function AddOptions() {
  return (
    <div className="container">
      <div className="row">
        <input type="text" id="sku-search" />
        <button className=".btn">By SKU</button>
      </div>
      <div className="row">
        <input type="text" id="product-search" />
        <button className=".btn">By Name</button>
      </div>
          <div className="row">
              <input type="text" id="-search" />
              <button className=".btn">By Name</button>
          </div>
    </div>
  );
}
