import React from "react";
import Cart from "./Cart";
import AddOptions from "./AddOptions";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";
export default class CreateOrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileId: "", responses: [], errorMessage: "" };
  }
  addByProductName
  (skuId) {
    if (!skuId) {
      return;
    }
    alert(skuId);
      var resp=this.state.responses

      var x = { links: [{ rel: "self", href: "http://busgk0711.us.oracle.com:9080/ccagentui/v1/skus/sku10025?showNotForIndividualSale=false" }], autoWrap: true, items: [{ dynamicPropertyMapLong: {}, bundleLinks: [], largeImage: null, smallImage: null, listVolumePrice: null, endDate: null, derivedCatalogs: [{ repositoryId: "cloudLakeCatalog" }, { repositoryId: "VidoeGamesAndCamerasCatalog" }, { repositoryId: "cloudCatalog" }], listPrices: { CADollar1542620504765: null, AUDollar_15344282519778: null, AUDollar1542622644380: null, defaultPriceGroup: 229.99, CADollar1542622644380: null, CADollar_15344282519778: null, AUDollar1542620504716: null }, type: "sku", largeImageURLs: [], productLine: null, listVolumePrices: { CADollar1542620504765: null, AUDollar_15344282519778: null, AUDollar1542622644380: null, defaultPriceGroup: null, CADollar1542622644380: null, CADollar_15344282519778: null, AUDollar1542620504716: null }, translations: {}, model: null, id: "sku10025", barcode: "200000002183", wholesalePrice: null, salePriceEndDate: null, images: [], unitOfMeasure: null, primaryMediumImageURL: null, dynamicPropertyMapBigString: {}, skuInfos: {}, active: true, thumbImageURLs: [], creationDate: "2011-01-13T17:11:21.000Z", version: 2, parentProducts: [{ longDescription: null, primaryThumbImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100", largeImage: null, smallImage: null, listVolumePrice: null, displayName: "Xbox 360", orderLimit: 100, description: null, primaryFullImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg", largeImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940"], primaryLargeImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940", addOnProducts: [], shippable: true, smallImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"], id: "prod10012", saleVolumePrice: null, childSKUs: [{ repositoryId: "sku10025" }], salePrice: null, primaryMediumImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475", fullImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg"], active: true, thumbImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100"], productImages: [{ repositoryId: "m559210" }], route: "/xbox-360/product/prod10012", notForIndividualSale: false, mediumImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475"], repositoryId: "prod10012", shippingSurcharge: null, primarySourceImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300", primarySmallImageURL: "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300", sourceImageURLs: ["/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"], avgCustRating: 4.5, configurable: false, listPrice: 229.99 }], manufacturer_part_number: null, catalogs: [], mediumImageURLs: [], primarySourceImageURL: null, primarySmallImageURL: null, sourceImageURLs: [], startDate: null, template: null, productFamily: null, primaryThumbImageURL: null, replacementProducts: null, dynamicAttributes: {}, fixedReplacementProducts: [], nonreturnable: false, displayName: null, description: null, salePrices: { CADollar1542620504765: null, AUDollar_15344282519778: null, AUDollar1542622644380: null, defaultPriceGroup: null, CADollar1542622644380: null, CADollar_15344282519778: null, AUDollar1542620504716: null }, primaryFullImageURL: null, productListingSku: null, primaryLargeImageURL: null, derivedOnlineOnly: false, smallImageURLs: [], itemAcl: null, onSale: false, unit_of_measure: null, siteIds: [], dynamicPropertyMapString: {}, thumbnailImage: null, discountable: true, computedCatalogs: [], saleVolumePrices: { CADollar1542620504765: null, AUDollar_15344282519778: null, AUDollar1542622644380: null, defaultPriceGroup: null, CADollar1542622644380: null, CADollar_15344282519778: null, AUDollar1542620504716: null }, saleVolumePrice: null, catalogsReplacementProducts: [], salePriceStartDate: null, quantity: null, salePrice: null, fullImageURLs: [], variantValuesOrder: {}, auxiliaryMedia: {}, repositoryId: "sku10025", shippingSurcharge: 0.0, fractionalQuantitiesAllowed: false, fulfiller: null, dynamicPropertyMapDouble: {}, listPrice: 229.99, configurable: false }] };
      resp.push(x);
      this.setState({responses:resp})

  /*   var self = this; //inside promise this will not work so store it as self

    let queryParams = { showNotForIndividualSale: false };
    var headers = { Authorization: sessionStorage.getItem("token") };

    makeGetCall(getURIList()["GET_SKU"] + skuId, headers).then(response => {
      console.log(" response  ============>", response);
      if (response.parentProducts) {
        var items = self.state.items;
        items.push(response.parentProducts);
        self.setState({ items: items });
      }
      if (response.errorCode) {
        self.setState({ errorMessage: response.message });
      }
    }); */
  }

  addByProductName(productName) {
    if (!productName) {
      return;
    }
    alert(productName);
    
      
     var self = this; //inside promise this will not work so store it as self

    let queryParams = { showNotForIndividualSale: false };
    var headers = { Authorization: sessionStorage.getItem("token") };
    makeGetCall(getURIList()["GET_SKU"] + productName, headers, queryParams).then(
      response => {
        console.log(" response  ============>", response);
        if (response.items) {
          var resp=this.state.responses
          resp.push(response);
          self.setState({ responses: resp });
          console.log(self.state);
        }
        if (response.errorCode) {
          self.setState({ errorMessage: response.message });
        }
      }
    ); 
  }
  getAddOptionsTemplate(){
   return <div className="row">
      <AddOptions
        addBySku={this.addBySku.bind(this)}
        addByName={this.addByProductName.bind(this)}
      />
    </div>
  }
  getShoppingCartTemplate() {
    var CartElement = this.state.responses.length > 0 ? <Cart resp={this.state.responses} /> : null;
    return (<React.Fragment>
            <div className="row">
           <h5>Shopping cart</h5>
          </div>
         <hr />
      <div className="row">{CartElement}</div></React.Fragment>
      )
  }
  render() {
     
    return <div className="container">
        <h3>Create Order</h3>
        <hr />
        {this.getAddOptionsTemplate()}
        <hr />
        {this.getShoppingCartTemplate()}
      </div>;
  }
}
