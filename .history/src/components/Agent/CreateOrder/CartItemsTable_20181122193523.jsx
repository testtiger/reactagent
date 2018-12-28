import React, { Component } from "react";

export default class CartItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[]
    }
  }

  ccartItems(){
    
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <TableHeader />
            <TableBody />
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

function TableBody(props) {
  props = props.childSKUs;
  props.displayName;
  props.salePrice;
  props.listPrice;
  props.shippingSurcharge;
  props.id;
  props.active;
  var orderMapCallBack = function(order) {
    return (
      <tr key={order.orderId}>
        <th scope="col">{order.orderId}</th>
        <th scope="col">{order.customerName}</th>
        <th scope="col">{order.amount}</th>
      </tr>
    );
  };

  if (props) {
    return <tbody>{props.map(orderMapCallBack)}</tbody>;
  }
  return null;
}


function MakeLineItems(props){

  if (!props) {
    return null;
  }
  if (props.childSKUs.length===1){
    return SimpleLineItem(props);
  }
}
function ComplexLineItem(props){

}
function SimpleLineItem(props) {
  
  let skuId=props.childSKUs[0].repositoryId;
  let productName=props.displayName;
  let salePrice=props.salePrice;
  let listPrice=props.listPrice;
  let shippingSurcharge=props.shippingSurcharge;
  let productId=props.id;
  let status=props.active;

  let priceToDisplay =+(salePrice ? salePrice : listPrice)

  let quantity=1
  function onQuantitychange(e){
    quantity= +e.target.value
  }
 
  return <tr key={skuId}>
      <td scope="col">
        <span>{productName}</span>
        <span>{productId}</span>
        <span>{skuId}</span>
      </td>
      <td scope="col">
        <input type="text" value={quantity} onChange={onQuantitychange} />
        <button>Update</button>
      </td>
      <td scope="col">
        <span>{1 + "@" + priceToDisplay}</span>
      </td>
    <td scope="col">
      <span>{quantity * priceToDisplay}</span>
    </td>
    </tr>;
  

  
 
}
