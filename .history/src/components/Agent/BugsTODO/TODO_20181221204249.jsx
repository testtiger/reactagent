import React, { Component } from "react";

export default class TODO extends Component {
  render() {
    return <div className="container">
        <h5>TODO:</h5>
        <ul>
          <li> Token refresh logic</li>
          <li> add by sku : check stokc status for sku</li>
          <li> Implemnt Add By Product name</li>
          <li>For invalid shipping Address reset shipping methods</li>
          <li>Think about Shiiping surcharge</li>
          <li>if only surcharge product is present show only surcharge shipping methods</li>
        <li>remved hard coded email-id & insert  profile email id</li>
          <li>
            {" "}
            showing sites and price list groups - taking select sites and
            price list groupd - set headers
          </li>
        </ul>
        <h5>Known Issues:</h5>
        <ul>
          <li>
            Customer search : when searching a customer with "M" app is
            breaking
          </li>
          <li>On Logout : Navigattion displayed twice</li>
          <li>
            Customer search : On clicking enter search criteri becomes empty
          </li>
          <li>
            Customer search : params like limit is being considered in valid
            searchc riteria function
          </li>
        </ul>
        <h5>My Mistakes:</h5>
        <ul>
          <li>
            this : While making rest call .when I used <strong>this</strong> inside promoise. it refered globla object so I used self to store this before used self inside promise
          </li>
          <li>
            <legend>Cart component mounting - rerendering issue</legend>
            <span>
              <p>
                Inside Cart constructor I am initializing line itmes of
                state with passed props from createorder page. It caused
                following problem: Once the Cart is mounted - construor
                won;t be called again,
              </p>
              <p>
                I am using items present in state to render line items,
                which is incorrect
              </p>
              <p>
                so when new props I mean new Items comes from creat order
                page to cart, as Cart already mounted construor won't be
                called and new props won't be assigned to items object of
                state so always it shows old items
              </p>
              <p>
                FIX: As Cart is already mounted, consstrucorr won;t be
                called - second time . thouh I send new items in the form of
                props as I am considering itmes from state . as there is no
                change in state always old items which were initiated during
                mounting will be displayed fix for this . use
                this.props.items to make line Items
              </p>
              <p>
                Changed this.state.items.map(function(item) TO
                this.props.items.map(function(item)
              </p>
              {"class Cart extends Component\
                 { \
                     constructor(props) {\
                          super(props);\
                          this.props.lineItems;\
                           this.state = {items: this.props.lineItems}\
                     }\
                    render() \
                    this.state.items.map(function(item) {\
                    return MakeLineItem(item);\
                    });\
                     "}
            </span>
          </li>
        </ul>
      </div>;
  }
}
