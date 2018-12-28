import React, { Component } from "react";
import LineItem from "./LineItem";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.props.lineItems;
    this.state = {
      items: this.props.lineItems
    };
  }

  componentWillMount = () => {
    this.props.lineItems;
  };

  componentDidMount() {
  //  this.setState({ items: this.props.lineItems });
  }
  render() {
    var cartContent = [];
    /**
     * Inside constructor I am initializing items in state: 
     * It  caused following problem: 
     * Once the Cart is mounted & construor won;t be called again, 
     * I am passing new items as props . when there is change in props I ass
    As Cart is already mounted consstrucorr won;t be called & second time . thouh I send new items
    in the form of props as I am considering itmes from state . as there is no change in state
    always old items which were initiated during mounting will be displayed
    fix for this . use  this.props.items to make line Items */
    cartContent = this.props.items.map(function(item) {
      console.log(item);
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

  return <LineItem item={props} />;
}
function ComplexLineItem(props) {}

function lookup() {
  return this.resp.items[0].parentProducts[0];
}
function updateQuantity(newQuantity) {
  this.quantity = newQuantity;
}
function skuId() {
  console.log("-------------->", this.resp.items);
  return this.lookup().childSKUs[0].repositoryId;
}
