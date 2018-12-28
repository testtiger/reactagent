import React from "react";

export default function AddOptions() {
  return (
    <div className="container">
      <div className="row">
              <div className="col-mo">
        <input type="text" id="sku-search" />
        <button className=".btn">By SKU</button>
        <input type="text" id="product-search" />
        <button className=".btn">By Name</button>
        <button className=".btn">Browse Catalog</button>
      </div>
    </div>
  );
}
