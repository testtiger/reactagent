import React, { Component } from "react";
import ProfileDetails from "./ProfileInfo";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: "",
      getProfileResponse: "",
      errorMessage: ""
    };
  }

  getProfileDetails(profileId) {
    var self = this;
    var headers = { Authorization: sessionStorage.getItem("token") };
    makeGetCall(getURIList().newProfile_URI + profileId, headers).then(
      response => {
        console.log("psots are ============>" + response);
        if (response.profileDetail) {
          self.setState({
            getProfileResponse: response
          });
        }
        if (response.errorCode) {
          self.setState({ errorMessage: response.message });
        }
      }
    );
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
    if (this.state.profileId) {
      this.setState({});
      console.log(this.state);
    }
  }

  componentDidMount() {
    console.log("in componentDidMount");
    if (this.props.profileId) {
      this.setState({ profileId: this.props.profileId });
      this.getProfileDetails(this.state.profileId);
    }
  }

  render() {
    console.log("in render");
    let profileDetails = this.state.getProfileResponse
      ? this.state.getProfileResponse.profileDetail
      : null;
    var profileInfo = null;

    if (this.state.profileId && profileDetails) {
      profileInfo = (
        <ProfileDetails
          firstName={profileDetails.firstName}
          lastName={profileDetails.lastName}
          email={profileDetails.email}
          receiveEmail={profileDetails.receiveEmail}
        />
      );
    }

    return (
      <div className="container">
        <h5>ProfilePage</h5>
        {profileInfo}
      </div>
    );
  }
}