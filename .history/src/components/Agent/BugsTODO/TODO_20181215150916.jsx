import React, { Component } from "react";

export default class TODO extends Component {
  render() {
    return (
      <div>
        <h5>TODO:</h5>
        <ul>
          <li>Token refresh logic</li>
          <li>TODO: add by sku : check stokc status for sku</li>
        </ul>
        <h5>Bugs:</h5>
        <ul>
          <li>
            Customer search : when searching a customer with "M" app is breaking
          </li>
        </ul>
        <h5>My Mistakes:</h5>
        <ul>
          <li>
                    this : While making rest call .when I used <strong>this</strong> inside promoise. it refered globla object
          </li>
        </ul>
      </div>
    );
  }
}
