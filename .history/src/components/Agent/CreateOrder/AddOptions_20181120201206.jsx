import React from "react";

export default function AddOptions() {
  return (
    <div className="container">
      <div className="row">
        <input type="text" id="sku-search" />
        <button className=".btn">Add By SKU</button>
      </div>
          <div className="row">
              <input type="text" id="product-search" />
              <button className=".btn">Add By SKU</button>
          </div>
    </div>
  );
}