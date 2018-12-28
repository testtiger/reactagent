import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import { makeGetCall } from "../Rest/agent-rest-client";
class CustomerSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResponse: {
            "profileList": [
                {
                    "numberOfOrders": 5,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171576",
                        "shippingAddress": null,
                        "id": "171576",
                        "parentOrganization": null,
                        "email": "rahul@example1542888365178.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70628",
                    "latestOrderSiteId": "siteUS",
                    "hasIncompleteOrder": true
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171575",
                        "shippingAddress": null,
                        "id": "171575",
                        "parentOrganization": null,
                        "email": "rahul@example1542888261377.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 2,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171528",
                        "shippingAddress": null,
                        "id": "171528",
                        "parentOrganization": null,
                        "email": "rahul@example1542887810155.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70618",
                    "latestOrderSiteId": "siteUS",
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 3,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171472",
                        "shippingAddress": null,
                        "id": "171472",
                        "parentOrganization": null,
                        "email": "rahul@example1542887259117.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70614",
                    "latestOrderSiteId": "siteUS",
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 1,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171454",
                        "shippingAddress": null,
                        "id": "171454",
                        "parentOrganization": null,
                        "email": "rahul@example1542886983528.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70608",
                    "latestOrderSiteId": "siteUS",
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171453",
                        "shippingAddress": null,
                        "id": "171453",
                        "parentOrganization": null,
                        "email": "rahul@example1542886926918.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 1,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171428",
                        "shippingAddress": null,
                        "id": "171428",
                        "parentOrganization": null,
                        "email": "rahul@example1542886661542.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70606",
                    "latestOrderSiteId": "siteUS",
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 6,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "171143",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "181188"
                        },
                        "id": "171143",
                        "parentOrganization": null,
                        "email": "rahul@example1542881527521.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": "o70590",
                    "latestOrderSiteId": "hurray100011542881525499",
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170771",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "13202",
                            "repositoryId": "180808"
                        },
                        "id": "170771",
                        "parentOrganization": null,
                        "email": "rahul@example1542805063276.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170145",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180164"
                        },
                        "id": "170145",
                        "parentOrganization": null,
                        "email": "rahul@example1542622646411.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170128",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180144"
                        },
                        "id": "170128",
                        "parentOrganization": null,
                        "email": "rahul@example1542622297744.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170114",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180127"
                        },
                        "id": "170114",
                        "parentOrganization": null,
                        "email": "rahul@example1542621208881.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170098",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180108"
                        },
                        "id": "170098",
                        "parentOrganization": null,
                        "email": "rahul@example1542620506812.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170082",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180089"
                        },
                        "id": "170082",
                        "parentOrganization": null,
                        "email": "rahul@example1542613941066.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                },
                {
                    "numberOfOrders": 0,
                    "profileDetail": {
                        "firstName": "Rahul",
                        "lastName": "Dravid",
                        "profileType": null,
                        "repositoryId": "170066",
                        "shippingAddress": {
                            "phoneNumber": "123-123-1234",
                            "postalCode": "36006",
                            "repositoryId": "180070"
                        },
                        "id": "170066",
                        "parentOrganization": null,
                        "email": "rahul@example1542611060507.com",
                        "secondaryOrganizations": []
                    },
                    "latestOrderId": null,
                    "latestOrderSiteId": null,
                    "hasIncompleteOrder": false
                }
            ],
            "hasMore": true,
            "links": [
                {
                    "rel": "self",
                    "href": "http://busgk0711.us.oracle.com:9080/ccagentui/v1/profiles?q=%7B%22firstName%22%3A%22%22%2C%22lastName%22%3A%22%22%2C%22email%22%3A%22rahul%22%2C%22postalCode%22%3A%22%22%2C%22phoneNumber%22%3A%22%22%2C%22pageNumber%22%3A0%2C%22limit%22%3A15%2C%22requireCount%22%3Afalse%7D"
                }
            ],
            "totalNoOfProfiles": 15
        }
    };
  }
  getCustomers() {
    var self = this;
    var uri = "";
    var headers = {};
    var queryParams = {};

    makeGetCall(uri, headers, queryParams).then(response => {
      response;
    });
  }

  onClickNoOfOrder(){

  }
  onClickN
  render() {
      let SearcResultsElement = this.state.searchResponse ? <SearchResults resp={this.state.searchResponse}/> : null;
    return (
      <div className="container">
        <SearchCriteria />
        {SearcResultsElement}
      </div>
    );
  }
}

export default CustomerSearchPage;
