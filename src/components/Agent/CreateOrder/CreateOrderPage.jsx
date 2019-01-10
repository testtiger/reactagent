import React from "react";
import Cart from "./Cart";
import AddOptions from "./AddOptions";
import OrderSummary from "./OrderSummary";
import AddressFields from "./AddressFields";
import ShippingMethods from "./ShippingMethods";

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
      availableShippingMethods: [],
      selectedShippingMethod: "",
      payment: "",
      orderTotal: ""
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
    console.log(this.state.items);
    if (matchIndex == -1) {
      return;
    }
    let localState = { ...this.state };
    localState.items.splice(matchIndex, 1);
    this.setState({ items: localState.items });
    this.makePriceOrderCall(this.state.items);
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

  makePriceOrderCall(products) {
    //Inside rest call /promise this will not work so use self
    var self = this; //inside promise this will not work so store it as self

    if (self.state.items.length > 0 && self.state.orderId !== null) {
      let shoppingCartItems = self.makeShoppingCartWithItems(products);

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
          localState.orderTotal = endPointResponse.priceInfo.total;

          self.setState({ ...localState });
        }
        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
        }
      });
    }
  }

  makeSubmitOrderCall(products) {
    //Inside rest call /promise this will not work so use self
    var self = this; //inside promise this will not work so store it as self

    if (self.state.items.length > 0 && self.state.orderId !== null) {
      let shoppingCartItems = self.makeShoppingCartWithItems(products);

      let requestObject = {
        profileId: self.state.profileId,
        shoppingCart: {
          items: shoppingCartItems,
          orderTotal: self.state.orderTotal
        },
        amountRemaining: self.state.orderTotal,
        op: "submitOrder",
        payments: {
          nameOnCard: "test",
          cardType: "visa",
          cardNumber: "4111111111111111",
          cardCVV: "123",
          endMonth: "12",
          endYear: 2020,
          type: "card",
          expiryMonth: "12",
          expiryYear: "2040",
          paymentMethodType: "card",
          cardTypeName: "Visa"
        },
        shippingMethod: {
          value: self.state.selectedShippingMethod
        },
        shippingAddress: self.state.shippingAddress,
        billingAddress: self.state.shippingAddress,
        id: self.state.orderId
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

        if (endPointResponse.errorCode) {
          alert(endPointResponse.message);
        }
      });
    }
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
    console.log(this.makeSubmitOrderCall(this.state.items));
  }

  updateShippingAddress(shippingAddressObject) {
    console.log(shippingAddressObject);
    shippingAddressObject["state_ISOCode"] =
      shippingAddressObject.selectedCountry + "-" + shippingAddressObject.state;
    shippingAddressObject["selectedState"] = shippingAddressObject.state;
    shippingAddressObject["stateName"] = shippingAddressObject.state;
    console.log(shippingAddressObject);
    this.setState({ shippingAddress: shippingAddressObject });
    this.setState({ availableShippingMethods: [] });
  }

  populateShippingMethods() {
    let self = this;
    if (
      typeof self.state.items === "undefined" &&
      self.state.items.length < 0
    ) {
      throw TypeError("shopping cart shoulnot be empty/undefined");
    }

    let items = [...self.state.items];
    let shoppingCartItems = self.makeShoppingCartWithItems(items);
    let requestObject = {
      shoppingCart: { items: shoppingCartItems },
      populateShippingMethods: true,
      profileId: self.state.profileId,
      shippingAddress: self.state.shippingAddress
    };

    console.log(requestObject);
    let uri = "/ccagentui/v1/shippingMethods";
    let queryParams = {};
    var headers = { Authorization: sessionStorage.getItem("token") };
    let localState = { ...self.state };

    makePostCall(uri, headers, requestObject).then(function(endPointResponse) {
      console.log(" response  ============>", endPointResponse);
      if (endPointResponse.items) {
        console.log(
          "endPointResponse for populate shipping methods call--------",
          endPointResponse
        );
        endPointResponse.items.forEach(function(method) {
          for (let p in shipipingMethodProp) {
            method[p] = shipipingMethodProp[p];
          }
          method["resp"] = method;
        });
        endPointResponse.items.map(function(method) {
          console.log(method.getId(), "----------", method.getDisplayName());
        });

        self.setState({ availableShippingMethods: endPointResponse.items });
        self.setState({
          selectedShippingMethod: endPointResponse.items[0].getId()
        });
      }
      if (endPointResponse.errorCode) {
        alert(endPointResponse.message);
      }
    });
  }

  selectedShippingMethod(event) {
    this.setState({ selectedShippingMethod: event.target.value });
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
        <div className="row">
          <AddressFields addAddress={this.updateShippingAddress.bind(this)} />
          <div className="col-sm-5">
            <ShippingMethods
              shippingMethodsList={this.state.availableShippingMethods}
              onChange={this.selectedShippingMethod.bind(this)}
              loadShippingMethods={this.populateShippingMethods.bind(this)}
            />
          </div>
        </div>
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

var shipipingMethodProp = {
  resp: "",
  getDisplayName: function() {
    return this.resp.displayName;
  },
  getId: function() {
    return this.resp.id;
  },
  getShippingCost: function(subTotal) {
    subTotal = +subTotal;
    var ranges = this.resp.ranges;
    for (var i = 0, n = ranges.length; i < n; i++) {
      var low = ranges[i].low;
      var high = ranges[i].high;
      var assocaiteCost = ranges[i].amount;
      console.log("---------------" + low);
      console.log("---------------" + high);
      console.log("---------------" + assocaiteCost);

      if (high === null && subTotal >= low) {
        return assocaiteCost;
      } else if (subTotal >= low && subTotal <= high) {
        return assocaiteCost;
      }
    }
  },
  isEligibleForProductWithSurcharges: function() {
    return this.resp.eligibleForProductWithSurcharges === null ? false : true;
  }
};
/***
 * 
 * Problme 1 : when I copied items for state to local state :
       On adding an item to local state it is added automaticlly to items of Original state
 *      
 * 
 */
