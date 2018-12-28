 import React from "react";
import Cart from "./Cart"
import AddOptions from "./AddOptions";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";
export default class CreateOrderPage extends React.Component{


    constructor(props){
        super(props);
        this.state = { profileId: "", items: [], errorMessage:""};
    }
    
    addBySku(skuId) {
        if (!skuId) {
            return;
        }
        alert(skuId);
        var self = this; //inside promise this will not work so store it as self

        let queryParams = { showNotForIndividualSale: false };
        var headers = { Authorization: sessionStorage.getItem("token") };

        makeGetCall(getURIList()["GET_SKU"] + skuId, headers).then(response => {
            console.log(" response  ============>", response);
            if (response.parentProducts) {
               var items= self.state.items
                items.push(response.parentProducts);
                self.setState({ items: items });
            }
            if (response.errorCode) {
                self.setState({ errorMessage: response.message });
            }
        });
    }

    addBName(productName) {
        if (!skuId) {
            return;
        }
        alert(skuId);
        var self = this; //inside promise this will not work so store it as self

        let queryParams = { showNotForIndividualSale: false };
        var headers = { Authorization: sessionStorage.getItem("token") };

        makeGetCall(getURIList()["GET_SKU"] + skuId, headers).then(response => {
            console.log(" response  ============>", response);
            if (response.parentProducts) {
                var items = self.state.items
                items.push(response.parentProducts);
                self.setState({ items: items });
            }
            if (response.errorCode) {
                self.setState({ errorMessage: response.message });
            }
        });
    }
    render(){
        return <div className="container">
            <h3>Create Order</h3>
            <hr />
            <div className="row">
              <AddOptions receiver={this} addBySku={this.addBySku.bind(this)} />
            </div>
            <div className="row">
              <Cart />
            </div>
          </div>;

    }
 }