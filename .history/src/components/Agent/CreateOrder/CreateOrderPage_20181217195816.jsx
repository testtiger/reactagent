import React from "react";
import Cart from "./Cart";
import AddOptions from "./AddOptions";
import OrderSummary from "./OrderSummary";
import AddressFields from "./AddressFields";
import {
  makeGetCall,
  getURIList,
  makePostCall
} from "../Rest/agent-rest-client";
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
      items: [],
      orderId: null,
      siteId: "",
      plg: "",
      shippingAddress: "",
      payment: ""
    };
  }

  componentDidMount() {
    this.getInCompleteCartItems(this.state.profileId);
  }

  getInCompleteCartItems(profileId) {
    var uri = "/ccagentui/v1/orders";
    var self = this; //inside promise this will not work so store it as self
    var headers = { Authorization: sessionStorage.getItem("token") };
    var queryParams = { profileId: profileId, status: "incomplete" };

    makeGetCall(uri, headers, queryParams).then(endPointResponse => {
      let localState = { ...this.state };
      console.log(" response  ============>", endPointResponse);
      if (!endPointResponse) {
        return; //return control back if there is no incomplete cart
      }
      if (endPointResponse.shoppingCart) {
        endPointResponse.shoppingCart.items.map(function(ele) {
          let item = {
            ...incompletecartItemProps
          };
          item.resp = ele;
          item.remove = self.removeItemFromCart.bind(self);
          localState.items.push(item);
          return item;
        });

        localState.orderId = endPointResponse.id;
        localState.siteId = endPointResponse.siteId;
        localState.plg = endPointResponse.priceListGroup;
        self.setState({ ...localState });
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
      errorMessage: "",
      items: [],
      orderId: null,
      siteId: "",
      plg: "",
      shippingAddress: "",
      payment: ""
    });
  }

  getItemsSubTotal() {
    let itemsSubTotal = 0;
    if (this.state.items.length > 0) {
      this.state.items.forEach(function(ele, index) {
        itemsSubTotal = itemsSubTotal + ele.subTotal();
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
    // let localState ={...self.state.items}
    let itemsToBeAdded = [...self.state.items];

    let queryParams = { showNotForIndividualSale: false };
    var headers = { Authorization: sessionStorage.getItem("token") };

    makeGetCall(getURIList()["GET_SKU"] + skuId, headers, queryParams).then(
      endPointResponse => {
        console.log(" response  ============>", endPointResponse);
        if (endPointResponse.items) {
          let item = {
            resp: endPointResponse,
            remove: self.removeItemFromCart.bind(self)
          };
          for (let p in lineItem) {
            item[p] = lineItem[p];
          }
          itemsToBeAdded.push(item);

          //self.setState({ items: localState.items });
          if (self.state.items.length === 0 && self.state.orderId === null) {
            self.makeCreateOrderCall(itemsToBeAdded);
          } else {
            self.makePriceOrderCall(itemsToBeAdded);
          }
        }
        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
          self.setState({
            errorMessage: endPointResponse.message
          });
        }
      }
    );
  }

  makeCreateOrderCall(itemsToBeAdded) {
    if (this.state.items.length === 0 && this.state.orderId === null) {
      let shoppingCartItems = this.makeShoppingCartWithItems(itemsToBeAdded);

      let requestObject = {
        profileId: this.state.profileId,
        shoppingCart: { items: shoppingCartItems },
        combineLineItems: "yes",
        op: "createOrder",
        requestChannel: "agent",
        payments: []
      };

      console.log(requestObject);
      let uri = "/ccagentui/v1/orders";
      let queryParams = {};
      var headers = { Authorization: sessionStorage.getItem("token") };
      var self = this; //inside promise this will not work so store it as self

      makePostCall(uri, headers, requestObject).then(function(
        endPointResponse
      ) {
        let localState = { ...self.state };
        console.log(" response  ============>", endPointResponse);
        if (endPointResponse.shoppingCart) {
          endPointResponse.shoppingCart.items.map(function(ele) {
            let item = {
              ...incompletecartItemProps
            };
            item.resp = ele;
            item.remove = self.removeItemFromCart.bind(self);
            localState.items.push(item);
            return item;
          });

          localState.orderId = endPointResponse.id;
          localState.siteId = endPointResponse.siteId;
          localState.plg = endPointResponse.priceListGroup;
          self.setState({ ...localState });
        }
        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
        }
      });
    }
  }

  makePriceOrderCall(response) {
    //Inside rest call /promise this will not work so use self
    var self = this; //inside promise this will not work so store it as self

    if (self.state.items.length > 0 && self.state.orderId !== null) {
      let shoppingCartItems = self.makeShoppingCartWithItems(response);

      let requestObject = {
        orderId: self.state.orderId,
        shoppingCart: { items: shoppingCartItems },
        combineLineItems: "yes",
        op: "priceOrder",
        payments: []
      };

      console.log(requestObject);
      let uri = "/ccagentui/v1/orders";
      let queryParams = {};
      var headers = { Authorization: sessionStorage.getItem("token") };

      makePostCall(uri, headers, requestObject).then(function(
        endPointResponse
      ) {
        let localState = {};
        console.log(" response  ============>", endPointResponse);
        if (endPointResponse.shoppingCart) {
          let shoppingCartFromPriceOrderResp = endPointResponse.shoppingCart.items.map(
            function(ele) {
              let item = {
                ...incompletecartItemProps
              };
              item.resp = ele;
              item.remove = self.removeItemFromCart.bind(self);
              return item;
            }
          );
          console.log(
            "shoppingCartFromPriceOrderResp--------",
            shoppingCartFromPriceOrderResp
          );
          localState.items = shoppingCartFromPriceOrderResp;
          localState.orderId = endPointResponse.id;
          localState.siteId = endPointResponse.siteId;
          localState.plg = endPointResponse.priceListGroup;

          self.setState({ ...localState });
        }
        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
        }
      });
    }
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
    var self = this;

    let localState = { ...this.state };

    let item = { resp: response, remove: this.removeItemFromCart.bind(this) };
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

  makeShoppingCartWithItems(itemsToBeAdded) {
    if (!itemsToBeAdded || itemsToBeAdded === undefined) {
      throw TypeError(
        "cannot construct shopping cart when itemsToBeAdded is undefined/null/"
      );
    }
    let localState = itemsToBeAdded; // ? itemsToBeAdded : this.state;
    if (localState.length > 0) {
      return localState.map(function(item) {
        return {
          productId: item.productId(),
          quantity: item.quantity(),
          catRefId: item.skuId()
        };
      });
    } else {
      return;
    }
  }
  onClickPlaceOrder() {
    alert("clicked on place order");
    console.log(this.makeCreateOrderCall());
  }

  

  shippingAddressChanges1(shippingAddressObject) {
    console.log(shippingAddressObject);
    shippingAddressObject["state_ISOCode"] = shippingAddressObject.selectedCountry + "-" + shippingAddressObject.state;
    shippingAddressObject["selectedState"] = shippingAddressObject.state;
    shippingAddressObject["stateName"] = shippingAddressObject.state;
    console.log(shippingAddressObject);
    if (this.isShippingAddressValid(shippingAddressObject)) {
      this.setState({ shippingAddress: shippingAddressObject });
    }
  }

  isShippingAddressValid(address) {
    let emptyString = "";
    for (let p in address) {
      if (address[p] === emptyString) {
        return false;
      }
    }
    return true;
  }

   populateShippingMethods(){
    let self=this;
    if(!(typeof self.state.items==='undefined' && self.state.items.length>0)){
          throw TypeError("shopping shoulnot be empty/undefined")
    }
     if (!(self.state.shippingAddress && self.isShippingAddressValid(self.state.shippingAddress))){
       throw TypeError("shippingAddress shoulnot be empty");
    }
    let items=[...self.state.items]
     let shoppingCartItems = makeShoppingCartWithItems(items);
     let requestObject = {
       shoppingCart: { items: shoppingCartItems },
       populateShippingMethods: true,
       profileId: self.state.profileId,
       shippingAddress:self.state.shippingAddress
     };
    

     console.log(requestObject);
     let uri = "/ccagentui/v1/shippingMethods";
     let queryParams = {};
     var headers = { Authorization: sessionStorage.getItem("token") };

     makePostCall(uri, headers, requestObject).then(function (
       endPointResponse
     ) {
       let localState = {};
       console.log(" response  ============>", endPointResponse);
       if (endPointResponse.items) {
        
         console.log("endPointResponse for populate shipping methods call--------", endPointResponse);
       }
       if (endPointResponse.errorCode) {
         alert(endPointResponse.message);
       }
     });
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

        <div className="row">
          <OrderSummary subTotal={this.getItemsSubTotal()} />
        </div>
        <hr />

        <AddressFields shipping={this.shippingAddressChanges1.bind(this)} />
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
  },
  subTotal: function() {
    let roundINgError = 100000;
    let itemTotal = this.salePrice() ? this.salePrice() : this.listPrice();
    itemTotal = (itemTotal * roundINgError * this.quantity()) / roundINgError;
    return itemTotal;
  }
};

/***
 * 
 * Problme 1 : when I copied items for state to local state :
       On adding an item to local state it is added automaticlly to items of Original state
 *      
 * 
 */
