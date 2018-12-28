 import React from "react";
import Cart from "./Cart"
import AddOptions from "./AddOptions";
 
export default class CreateOrderPage extends React.Component{


    constructor(props){
        super(props);
        this.state = { profileId: "", errorMessage:"" };
    }
    
    addBySku(skuId) {
        if (!skuId) {
            return;
        }
        var self = this; //inside promise this will not work so store it as self

        let queryParams = { showNotForIndividualSale: false };
        var headers = { Authorization: sessionStorage.getItem("token") };

        makeGetCall(getURIList()["GET_SKU"] + skuId, headers).then(response => {
            console.log(" response  ============>", response);
            if (response.parentProducts) {
                self.setState({ response: response });
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
              <AddOptions addSku={this.addBySku.bind(this) receiver=}/>
            </div>
            <div className="row">
                <Cart />
            </div>
          </div>;

    }
 }