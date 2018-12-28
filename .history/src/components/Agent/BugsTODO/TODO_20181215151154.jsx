import React, { Component } from "react";

export default class TODO extends Component {
  render() {
    return <div>
        <h5>TODO:</h5>
        <ul>
          <li>Token refresh logic</li>
          <li>TODO: add by sku : check stokc status for sku</li>
        </ul>
        <h5>Bugs:</h5>
        <ul>
          <li>
            Customer search : when searching a customer with "M" app is
            breaking
          </li>
        </ul>
        <h5>My Mistakes:</h5>
        <ul>
          <li>
            this : While making rest call .when I used <strong>this</strong> inside promoise. it refered globla object so I used self to store this before used self inside promise
          </li>
          <li>
            <legend />Cart component mounting : re // As I have initiate items in the constructor : is is caused the problme when I add a new Item // As Cart is already mounted consstrucorr won;t be called & second time . thouh I send new items // in the form of props as I am considering itmes from state . as there is no change in state // always old items which were initiated during mounting will be displayed // fix for this . use this.props.items to make line Items
          </li>
        </ul>
      </div>;
  }
}
