import React,{Component} from "react";
import ProfileDetails from "./ProfileDetails";
import  {makeGetCall,getURIList}from "../Rest/agent-rest-client";

class ProfilePage extends Component{

    constructor(props){
        super(props);
        this.state={
            profileId:"",
            getProfileresponse:""
        }

    }

    getProfileDetails(profileId) {
        var self = this;
        var headers = { Authorization: sessionStorage.getItem("token") };
        makeGetCall(getURIList().newProfile_URI + profileId, headers).then(response => {
            console.log("psots are ============>" + response);
            if (response.profileDetail) {
                self.setState({
                  getProfileresponse: response
                });
            }
            if (response.errorCode) {
                self.setState({ errorMessage: response.message });
            }
        });
    }
    componentWillReceiveProps(){
        if (this.props.profileId){
            this.state.profileId = this.props.profileId
            this.getProfileDetails()
        }
    }

    componentDidMount(){

    }

    render(){
        if (this.state.profileId){

        }
        else{
            return null;
        }
    }

}