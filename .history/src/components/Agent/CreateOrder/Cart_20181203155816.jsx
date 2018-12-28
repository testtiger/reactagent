import React, { Component } from "react";
import LineItem from "./LineItem";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
       items: {
         //"skuid":{resp:"",q:2}
       }

      };
  }

  componentDidMount() {
    //for add BY SKU....
    
    var x = this.props.resp;
    var productProp = x.items[0].parentProducts[0];

    if (productProp.childSKUs[0].repositoryId){
      let itemsList = {...this.state.items};
      itemsList[productProp.childSKUs[0].repositoryId] = productProp
      this.setState({ items: itemsList });
    }
   
  }
  render() {
    var element = null;
   
    if (Object.keys(this.state.items).length>0){
      
    }
    if (this.state.items.length > 0) {
      element = MakeLineItem(this.state.items[0]);
    }
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <TableHeader />
            <tbody>
              {element}
            </tbody>
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
function ComplexLineItem(props) {}
