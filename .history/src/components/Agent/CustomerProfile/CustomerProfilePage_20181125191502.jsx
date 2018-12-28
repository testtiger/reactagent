import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo";
import { makeGetCall, getURIList } from "../Rest/agent-rest-client";

export default class CustomerProfilePage extends Component {
  constructor(props) {
    super(props);
    if (!this.props.profileId) {
      throw "Profile id cannot be empty /undefined";
    }
    this.state = {
      profileId: this.props.profileId,
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
      /* this.setState(function(prevstate, props) {
        return { profileId: props.profileId };
      }); */
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
        <ProfileInfo
          firstName={profileDetails.firstName}
          lastName={profileDetails.lastName}
          email={profileDetails.email}
          receiveEmail={profileDetails.receiveEmail}
        />
      );
    }

    return (
   
        {profileInfo}
      
    );
  }
}
