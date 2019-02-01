import React, { Component } from "react";

export default class QuickLinks extends Component {

    render() {
        var quickLinksList = this.props.qucikLinks;
        console.log(quickLinksList);
        var callBack = function (linkItem) {
            return (
                <li key={linkItem.id}>
                    <span>
                        <a href={linkItem.linkURL}>{linkItem.message}</a>
                    </span>
                </li>
            );
        };
        return (

            <div className="card">
                <h5 className="card-header">
                    Quick Links
				</h5>
                <div className="card-body">
               
                        <ul>{quickLinksList.map(callBack)}</ul>
                    
                </div>

            </div>
            
        );
    }
}

