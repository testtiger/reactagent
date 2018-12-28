import React, { Component } from "react";

export default class CartItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[]
    }
  }


  componentDidMount(){
    var x = { "links": [{ "rel": "self", "href": "http://busgk0711.us.oracle.com:9080/ccagentui/v1/skus/sku10025?showNotForIndividualSale=false" }], "autoWrap": true, "items": [{ "dynamicPropertyMapLong": {}, "bundleLinks": [], "largeImage": null, "smallImage": null, "listVolumePrice": null, "endDate": null, "derivedCatalogs": [{ "repositoryId": "cloudLakeCatalog" }, { "repositoryId": "VidoeGamesAndCamerasCatalog" }, { "repositoryId": "cloudCatalog" }], "listPrices": { "CADollar1542620504765": null, "AUDollar_15344282519778": null, "AUDollar1542622644380": null, "defaultPriceGroup": 229.99, "CADollar1542622644380": null, "CADollar_15344282519778": null, "AUDollar1542620504716": null }, "type": "sku", "largeImageURLs": [], "productLine": null, "listVolumePrices": { "CADollar1542620504765": null, "AUDollar_15344282519778": null, "AUDollar1542622644380": null, "defaultPriceGroup": null, "CADollar1542622644380": null, "CADollar_15344282519778": null, "AUDollar1542620504716": null }, "translations": {}, "model": null, "id": "sku10025", "barcode": "200000002183", "wholesalePrice": null, "salePriceEndDate": null, "images": [], "unitOfMeasure": null, "primaryMediumImageURL": null, "dynamicPropertyMapBigString": {}, "skuInfos": {}, "active": true, "thumbImageURLs": [], "creationDate": "2011-01-13T17:11:21.000Z", "version": 2, "parentProducts": [{ "longDescription": null, "primaryThumbImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100", "largeImage": null, "smallImage": null, "listVolumePrice": null, "displayName": "Xbox 360", "orderLimit": 100, "description": null, "primaryFullImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg", "largeImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940"], "primaryLargeImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940", "addOnProducts": [], "shippable": true, "smallImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"], "id": "prod10012", "saleVolumePrice": null, "childSKUs": [{ "repositoryId": "sku10025" }], "salePrice": null, "primaryMediumImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475", "fullImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg"], "active": true, "thumbImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100"], "productImages": [{ "repositoryId": "m559210" }], "route": "/xbox-360/product/prod10012", "notForIndividualSale": false, "mediumImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475"], "repositoryId": "prod10012", "shippingSurcharge": null, "primarySourceImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300", "primarySmallImageURL": "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300", "sourceImageURLs": ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"], "avgCustRating": 4.5, "configurable": false, "listPrice": 229.99 }], "manufacturer_part_number": null, "catalogs": [], "mediumImageURLs": [], "primarySourceImageURL": null, "primarySmallImageURL": null, "sourceImageURLs": [], "startDate": null, "template": null, "productFamily": null, "primaryThumbImageURL": null, "replacementProducts": null, "dynamicAttributes": {}, "fixedReplacementProducts": [], "nonreturnable": false, "displayName": null, "description": null, "salePrices": { "CADollar1542620504765": null, "AUDollar_15344282519778": null, "AUDollar1542622644380": null, "defaultPriceGroup": null, "CADollar1542622644380": null, "CADollar_15344282519778": null, "AUDollar1542620504716": null }, "primaryFullImageURL": null, "productListingSku": null, "primaryLargeImageURL": null, "derivedOnlineOnly": false, "smallImageURLs": [], "itemAcl": null, "onSale": false, "unit_of_measure": null, "siteIds": [], "dynamicPropertyMapString": {}, "thumbnailImage": null, "discountable": true, "computedCatalogs": [], "saleVolumePrices": { "CADollar1542620504765": null, "AUDollar_15344282519778": null, "AUDollar1542622644380": null, "defaultPriceGroup": null, "CADollar1542622644380": null, "CADollar_15344282519778": null, "AUDollar1542620504716": null }, "saleVolumePrice": null, "catalogsReplacementProducts": [], "salePriceStartDate": null, "quantity": null, "salePrice": null, "fullImageURLs": [], "variantValuesOrder": {}, "auxiliaryMedia": {}, "repositoryId": "sku10025", "shippingSurcharge": 0.0, "fractionalQuantitiesAllowed": false, "fulfiller": null, "dynamicPropertyMapDouble": {}, "listPrice": 229.99, "configurable": false }] }
    var productProp = x.items[0].parentProducts[0];
    let itemsList=this.state.items;
    itemsList.push(productProp)
    this.setState({ items: itemsList})
  }
  render() {
    if (items)
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <TableHeader />
           
          </table>
        </div>
      </div>
    );
  }
}

function TableHeader() {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Item Total</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  props = props.childSKUs;
  props.displayName;
  props.salePrice;
  props.listPrice;
  props.shippingSurcharge;
  props.id;
  props.active;
  var orderMapCallBack = function(order) {
    return (
      <tr key={order.orderId}>
        <th scope="col">{order.orderId}</th>
        <th scope="col">{order.customerName}</th>
        <th scope="col">{order.amount}</th>
      </tr>
    );
  };

  if (props) {
    return <tbody>{props.map(orderMapCallBack)}</tbody>;
  }
  return null;
}


function MakeLineItems(props){

  if (!props) {
    return null;
  }
  if (props.childSKUs.length===1){
    return SimpleLineItem(props);
  }
}
function ComplexLineItem(props){

}
function SimpleLineItem(props) {
  
  let skuId=props.childSKUs[0].repositoryId;
  let productName=props.displayName;
  let salePrice=props.salePrice;
  let listPrice=props.listPrice;
  let shippingSurcharge=props.shippingSurcharge;
  let productId=props.id;
  let status=props.active;

  let priceToDisplay =+(salePrice ? salePrice : listPrice)

  let quantity=1
  function onQuantitychange(e){
    quantity= +e.target.value
  }
 
  return <tr key={skuId}>
      <td scope="col">
        <span>{productName}</span>
        <span>{productId}</span>
        <span>{skuId}</span>
      </td>
      <td scope="col">
        <input type="text" value={quantity} onChange={onQuantitychange} />
        <button>Update</button>
      </td>
      <td scope="col">
        <span>{1 + "@" + priceToDisplay}</span>
      </td>
    <td scope="col">
      <span>{quantity * priceToDisplay}</span>
    </td>
    </tr>;
  

  
 
}
