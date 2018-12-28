import React, { Component } from "react";
import LineItem from "./LineItem";
export default class Cart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], // sample [{id:"",details:{}}]
            payload: []
        };
    }

    someFunction(){

    }


    removeItemFromCart(){

    }
    componentDidMount() {
        //for add BY SKU....
        var self=this;
        re

        var x = this.props.resp;
        var productProp = x.items[0].parentProducts[0];
        
        if (productProp.childSKUs[0].repositoryId) {
            let localState = { ...this.state };
            let itemObj = {};

            itemObj["id"] = productProp.childSKUs[0].repositoryId;
            itemObj["details"] = productProp;
            itemObj["payload"]="";

            localState.items.push(itemObj);

            this.setState({ items: localState.items });
        }
    }
    render() {
        var cartContent = [];

        cartContent = this.state.items.map(function (item) {
            return MakeLineItem(item);
        });

        return (
            <div className="container">
                <div className="row">
                    <h5>Shopping cart</h5>
                </div>
                <hr />
                <div className="row">
                    <table className="table">
                        <TableHeader />
                        <tbody>{cartContent}</tbody>
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

function MakeLineItem(props) {
    if (!props) {
        return null;
    }
    if (props.childSKUs.length === 1) {
        return <LineItem conf={props} />;
    } else {
        return ComplexLineItem(props);
    }
}
function ComplexLineItem(props) { }
