import React, { Component } from "react";
import LineItem from "./LineItem";
export default class Cart extends Component {
                 constructor(props) {
                   super(props);
                   this.state = { items: [] };
                 }

                 componentDidMount() {
                  
                   var productProp = x.items[0].parentProducts[0];
                   let itemsList = this.state.items;
                   itemsList.push(productProp);
                   this.setState({ items: itemsList });
                 }
                 render() {
                   var element = null;
                   if (this.state.items.length > 0) {
                     element = MakeLineItem(this.state.items[0]);
                   }
                   return <div className="container">
                       <div className="row">
                         <table className="table">
                           <TableHeader />
                           <tbody>
                             {element}
                             {element}
                             {element}
                           </tbody>
                         </table>
                       </div>
                     </div>;
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


function MakeLineItem(props){

  if (!props) {
    return null;
  }
  if (props.childSKUs.length === 1) {
    return <LineItem conf={props} />;
  }
  else {
    return ComplexLineItem(props);
  }
}
function ComplexLineItem(props){

}