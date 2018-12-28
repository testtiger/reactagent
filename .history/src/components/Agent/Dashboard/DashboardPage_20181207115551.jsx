import React, { Component } from "react";
import QuickLinks from "./quicklinks";
import Announcements from "./announcements.jsx";
import RecentOrders from "./recentorders";
import PendingActions from "./pendingactions";
import { makeGetCall } from "../Rest/agent-rest-client.js";
import LoginPage from "../Login/loginpage";


export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      quicklinks: [],
      pendingActionItems: [],
      authToken: ""
    };
  }

  fetchPosts() {
    var self = this;

    var headers = { Authorization: sessionStorage.getItem("token") };
    console.log(headers + "---------------->");
    makeGetCall("/ccagentui/v1/posts", headers).then(response => {
      console.log("psots are ============>" + response);
      extratcPosts(response);
    });

    function extratcPosts(resp) {
      var announcementsList = [];
      var quickLinksList = [];

      var forEachCallBack = function(post) {
        if (post.type === "announcementPost" && post.active === true) {
          announcementsList.push(post);
        } else if (post.type === "quickLinkPost" && post.active === true) {
          quickLinksList.push(post);
        }
      };

      if (resp && resp.posts) {
        resp.posts.forEach(forEachCallBack);
      }

      self.setState({
        announcements: announcementsList,
        quicklinks: quickLinksList
      });
    }
  }

  fetchRecentOrders() {
    var self = this;
    var headers = { Authorization: sessionStorage.getItem("token") };
    var queryParams = { limit: 5 };
    makeGetCall(
      "/ccagentui/v1/agentReports/recentOrders/",
      headers,
      queryParams
    ).then(response => {
      console.log("psots are ============>" + response);
      if (response.recentOrders) {
        self.setState({
          recentOrders: response.recentOrders
        });
      }
    });
  }

  fetchPendingActions() {
    var self = this;
    var headers = { Authorization: sessionStorage.getItem("token") };
    var queryParams = { limit: 5 };
    makeGetCall(
      "/ccagentui/v1/agentReports/myPendingActions/",
      headers,
      queryParams
    ).then(response => {
      console.log("psots are ============>" + response);
      if (response.pendingActionItems) {
        self.setState({
          pendingActionItems: response.pendingActionItems
        });
      }
    });
  }
  componentDidMount() {
    this.fetchPosts();
    this.fetchRecentOrders();
    this.fetchPendingActions();
  }
  render() {
    let qucikLinksList = this.state.quicklinks;
    let announcementsList = this.state.announcements;
    let recentOrdersList = this.state.recentOrders;
    let pendingActionsList = this.state.pendingActionItems;

    if (this.isLoggedIn()) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-8" />
            <div className="col-sm-4">
              <Announcements announcements={announcementsList} />
              <QuickLinks qucikLinks={qucikLinksList} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <RecentOrders recentOrders={recentOrdersList} />
            </div>
            <div className="col-sm-6">
              <PendingActions pendingActions={pendingActionsList} />
            </div>
          </div>
        </div>
      );
    } else {
      return <LoginPage />;
    }
  }

  isLoggedIn() {
    return sessionStorage.getItem("isLoggedin") === "true";
  }
}
