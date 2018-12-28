 import React from "react";
import Cart from "./Cart"
import AddOptions from "./AddOptions";
 
export default class CreateOrderPage extends React.Component{


    constructor(props){
        super(props);
        this.state={
            profileId:"",

        }
    }
    
    addBySku(e){
        var skuId=e.target.value

    }
    render(){
        return <div className="container">
            <h3>Create Order</h3>
            <hr />
            <div className="row">
              <AddOptions />
            </div>
            <div className="row">
                <Cart />
            </div>
          </div>;

    }
 }