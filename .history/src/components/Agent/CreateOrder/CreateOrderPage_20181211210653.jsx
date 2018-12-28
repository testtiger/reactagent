import React from "react";
import Cart from "./Cart";
import AddOptions from "./AddOptions";
import OrderSummary from "./OrderSummary";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";
//OrderSummary
export default class CreateOrderPage extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.match.params.profileId) {
      throw Error("Profile id cannot be empty /undefined");
    }
    if (this.props.match.params.profileId) {
      alert(this.props.match.params.profileId);
    }
    this.state = {
      profileId: this.props.match.params.profileId,
      items: []
    };
  }

  componentDidMount() {
    this.getInCompleteCartItems(this.state.profileId);
  }

  getInCompleteCartItems(profileId) {
    var uri = "/ccagentui/v1/orders";
    var self = this; //inside promise this will not work so store it as self
    var headers = { Authorization: sessionStorage.getItem("token") };
    var queryParams = {
      profileId: profileId,
      status: "incomplete"
    };

    makeGetCall(uri, headers, queryParams).then(endPointResponse => {
      let localState = { ...this.state };
      console.log(" response  ============>", endPointResponse);
      if (endPointResponse.shoppingCart) {
        endPointResponse.shoppingCart.items.map(function(ele) {
          let item = { ...incompletecartItemProps };
          item.resp = ele;
          item.remove = self.removeItemFromCart.bind(self);
          localState.items.push(item);
          return item;
        });
          localState.orderId=
          state.orderId = incompleteOrderId;
          state.siteId = siteId;
          state.plg = incompleteOrderPriceListGroup;
        self.setState({ items: localState.items });
      }
      if (endPointResponse.errorCode) {
        alert(endPointResponse.message);
      }
    });
  }
  addByProductName(e) {
    var skuId = e;
  }

  restorDefaultState() {
    this.setState({
      profileId: "",
      response: "",
      errorMessage: ""
    });
  }

  getItemsSubTotal() {
    let itemsSubTotal = 0;
    if (this.state.items.length > 0) {
      this.state.items.forEach(function(ele, index) {
        let priceToConsider = +(ele.salePrice()
          ? ele.salePrice()
          : ele.listPrice());
        console.log("priceToConsider", priceToConsider);
        itemsSubTotal = itemsSubTotal + priceToConsider * ele.quantity();
        console.log(
          "priceToConsider * ele.quantity",
          priceToConsider * ele.quantity()
        );
      });
    }
    return itemsSubTotal;
  }
  getMatchingItemIndexBySkuId(id) {
    alert(this.getItemsSubTotal());
    let matchingIndex = -1;
    if (this.state.items.length > 0) {
      this.state.items.forEach(function(ele, index) {
        if (ele.skuId() == id) {
          matchingIndex = index;
          return;
        }
      });
    }
    return matchingIndex;
  }
  removeItemFromCart(id) {
    if (!id) {
      throw TypeError("id caanot be null");
    }
    //alert(id);
    let matchIndex = this.getMatchingItemIndexBySkuId(id);
    // alert("getMatchingItemIndexBySkuId");
    //alert(matchIndex);
    console.log(this.state.items);
    if (matchIndex == -1) {
      return;
    }
    let localState = { ...this.state };
    localState.items.splice(matchIndex, 1);
    this.setState({ items: localState.items });
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
          let localState = { ...this.state };

          let item = {
            resp: endPointResponse,
            remove: self.removeItemFromCart.bind(self)
          };
          for (let p in lineItem) {
            item[p] = lineItem[p];
          }
          localState.items.push(item);

          this.setState({ items: localState.items });
        }
        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
          self.setState({ errorMessage: endPointResponse.message });
        }
      }
    );
  }
  addBySku1(e) {
    var skuId = e;

    // whether sku exists or not
    // is sku have valid inventory above threshold
    //

    var response = {
      links: [
        {
          rel: "self",
          href:
            "http://busgk0711.us.oracle.com:9080/ccagentui/v1/skus/sku10025?showNotForIndividualSale=false"
        }
      ],
      autoWrap: true,
      items: [
        {
          dynamicPropertyMapLong: {},
          bundleLinks: [],
          largeImage: null,
          smallImage: null,
          listVolumePrice: null,
          endDate: null,
          derivedCatalogs: [
            { repositoryId: "cloudLakeCatalog" },
            { repositoryId: "VidoeGamesAndCamerasCatalog" },
            { repositoryId: "cloudCatalog" }
          ],
          listPrices: {
            CADollar1542620504765: null,
            AUDollar_15344282519778: null,
            AUDollar1542622644380: null,
            defaultPriceGroup: 229.99,
            CADollar1542622644380: null,
            CADollar_15344282519778: null,
            AUDollar1542620504716: null
          },
          type: "sku",
          largeImageURLs: [],
          productLine: null,
          listVolumePrices: {
            CADollar1542620504765: null,
            AUDollar_15344282519778: null,
            AUDollar1542622644380: null,
            defaultPriceGroup: null,
            CADollar1542622644380: null,
            CADollar_15344282519778: null,
            AUDollar1542620504716: null
          },
          translations: {},
          model: null,
          id: "sku10025",
          barcode: "200000002183",
          wholesalePrice: null,
          salePriceEndDate: null,
          images: [],
          unitOfMeasure: null,
          primaryMediumImageURL: null,
          dynamicPropertyMapBigString: {},
          skuInfos: {},
          active: true,
          thumbImageURLs: [],
          creationDate: "2011-01-13T17:11:21.000Z",
          version: 2,
          parentProducts: [
            {
              longDescription: null,
              primaryThumbImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100",
              largeImage: null,
              smallImage: null,
              listVolumePrice: null,
              displayName: "Xbox 360",
              orderLimit: 100,
              description: null,
              primaryFullImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg",
              largeImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940"
              ],
              primaryLargeImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=940&width=940",
              addOnProducts: [],
              shippable: true,
              smallImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"
              ],
              id: "prod10012",
              saleVolumePrice: null,
              childSKUs: [{ repositoryId: "sku10025" }],
              salePrice: null,
              primaryMediumImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475",
              fullImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg"
              ],
              active: true,
              thumbImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=100&width=100"
              ],
              productImages: [{ repositoryId: "m559210" }],
              route: "/xbox-360/product/prod10012",
              notForIndividualSale: false,
              mediumImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=475&width=475"
              ],
              repositoryId: "prod10012",
              shippingSurcharge: null,
              primarySourceImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300",
              primarySmallImageURL:
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300",
              sourceImageURLs: [
                "/ccstore/v1/images/?source=/file/v4675296977080013589/products/xbox360_LARGE.jpg&height=300&width=300"
              ],
              avgCustRating: 4.5,
              configurable: false,
              listPrice: 229.99
            }
          ],
          manufacturer_part_number: null,
          catalogs: [],
          mediumImageURLs: [],
          primarySourceImageURL: null,
          primarySmallImageURL: null,
          sourceImageURLs: [],
          startDate: null,
          template: null,
          productFamily: null,
          primaryThumbImageURL: null,
          replacementProducts: null,
          dynamicAttributes: {},
          fixedReplacementProducts: [],
          nonreturnable: false,
          displayName: null,
          description: null,
          salePrices: {
            CADollar1542620504765: null,
            AUDollar_15344282519778: null,
            AUDollar1542622644380: null,
            defaultPriceGroup: null,
            CADollar1542622644380: null,
            CADollar_15344282519778: null,
            AUDollar1542620504716: null
          },
          primaryFullImageURL: null,
          productListingSku: null,
          primaryLargeImageURL: null,
          derivedOnlineOnly: false,
          smallImageURLs: [],
          itemAcl: null,
          onSale: false,
          unit_of_measure: null,
          siteIds: [],
          dynamicPropertyMapString: {},
          thumbnailImage: null,
          discountable: true,
          computedCatalogs: [],
          saleVolumePrices: {
            CADollar1542620504765: null,
            AUDollar_15344282519778: null,
            AUDollar1542622644380: null,
            defaultPriceGroup: null,
            CADollar1542622644380: null,
            CADollar_15344282519778: null,
            AUDollar1542620504716: null
          },
          saleVolumePrice: null,
          catalogsReplacementProducts: [],
          salePriceStartDate: null,
          quantity: null,
          salePrice: null,
          fullImageURLs: [],
          variantValuesOrder: {},
          auxiliaryMedia: {},
          repositoryId: "sku10025",
          shippingSurcharge: 0.0,
          fractionalQuantitiesAllowed: false,
          fulfiller: null,
          dynamicPropertyMapDouble: {},
          listPrice: 229.99,
          configurable: false
        }
      ]
    };

    let localState = { ...this.state };

    var self = this;
    let item = {
      resp: response,
      remove: this.removeItemFromCart.bind(this)
    };
    for (let p in lineItem) {
      item[p] = lineItem[p];
    }
    localState.items.push(item);
    this.setState({ items: localState.items });
  }
  onChange(e) {
    var name = e.target.name;
    var value = e.target.value;
  }

  makeShoppingCartWithItems() {
    let extraProps = {
      expanded: false,
      stockStatus: true,
      stockState: "",
      commerceItemQuantity: 1,
      detailedItemPriceInfo: [],
      detailedRecurringChargeInfo: [],
      externalData: [],
      addOnItem: false,
      displayName: "The Girl with the Dragon Tattoo",
      invalid: false,
      priceListGroupId: "defaultPriceGroup"
    };
    let shoppingCart = {
      items: [
        {
          productId: "Product_36Exy",
          quantity: 1,
          repositoryId: "",

          catRefId: "Sku_36Fxy",

          displayName: ""
        }
      ]
    };
    let localState = this.state;
    if (localState.items.length > 0) {
      return localState.items.map(function(item) {
        let x = {
          productId: item.productId(),
          quantity: item.quantity(),
          repositoryId: "",
          catRefId: item.skuId(),
          displayName: item.displayName()
        };
        return x;
      });
    } else {
      return;
    }
  }
  onClickPlaceOrder() {
    alert("clicked on place order");
    console.log(this.makeShoppingCartWithItems());
  }
  render() {
    return (
      <div className="container">
        <h3>Create Order</h3>
        <hr />
        <div className="row">
          <AddOptions
            addBySku={this.addBySku.bind(this)}
            addByName={this.addByProductName.bind(this)}
          />
        </div>
        <div className="row">
          <Cart lineItems={this.state.items} />
        </div>
        <OrderSummary subTotal={this.getItemsSubTotal()} />
        <button onClick={this.onClickPlaceOrder.bind(this)}>Placeorder</button>
      </div>
    );
  }
}

var lineItem = {
  lookup: function() {
    return this.resp.items[0].parentProducts[0];
  },
  initialquantity: 1,
  quantity: function() {
    return this.initialquantity;
  },
  updateQuantity: function(newQuantity) {
    this.initialquantity = newQuantity;
  },
  skuId: function() {
    console.log("-------------->", this.resp.items);
    return this.lookup().childSKUs[0].repositoryId;
  },
  productId: function() {
    return this.lookup().id;
  },
  displayName: function() {
    return this.lookup().displayName;
  },
  listPrice: function() {
    return this.lookup().listPrice;
  },
  salePrice: function() {
    return this.lookup().salePrice;
  },
  shippingSurcharge: function() {
    return this.lookup().shippingSurcharge;
  },
  status: function() {
    return this.lookup().active;
  }
};

var incompletecartItemProps = {
  lookup: function() {
    return this.resp;
  },
  initalQuantity: null,
  quantity: function() {
    return this.initalQuantity ? this.initalQuantity : this.lookup().quantity;
  },
  updateQuantity: function(newQuantity) {
    this.initalQuantity = newQuantity;
  },
  skuId: function() {
    return this.lookup().catRefId;
  },
  productId: function() {
    return this.lookup().productId;
  },
  displayName: function() {
    return this.lookup().displayName;
  },
  listPrice: function() {
    return this.lookup().listPrice;
  },
  salePrice: function() {
    return this.lookup().salePrice;
  },
  shippingSurcharge: function() {
    return this.lookup().shippingSurchargeValue;
  },
  status: function() {
    return this.lookup().active;
  }
};
