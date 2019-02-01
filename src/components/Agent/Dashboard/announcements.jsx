import React, { Component } from "react";

export default class Announcements extends Component {
 

  render() {
    /**[
          {
            id: 123,
            message: "New Promtion is running",
            description: "promo code is :Test123"
          },
          {
            id: 1453,
            message: "Iphone x is coming",
            description: "Exciting new launch discounts"
          }
        ]; */
    var announceList = this.props.announcements;

    var callBack = function(annuonce) {
      return (
        <li key={annuonce.id}>
          <span dangerouslySetInnerHTML={{ __html: annuonce.message }} />
        </li>
      );
    };

    return (
      <div className="card">
        <h5 className="card-header">
         Announcements
				</h5>
        <div className="card-body">
            <ul>{announceList.map(callBack)}</ul>
        </div>
        
      </div>
      
    );
  }
}
