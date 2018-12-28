import React,{Component} from "react";
import ProfileDetails from "./ProfileDetails";
import  {makeGetCall,getURIList}from "../Rest/agent-rest-client";

class ProfilePage extends Component{

    constructor(props){
        super(props);
        this.state={
            profileId:"",
            getProfileResponse:""
        }

    }

    getProfileDetails(profileId) {
        var self = this;
        var headers = { Authorization: sessionStorage.getItem("token") };
        makeGetCall(getURIList().newProfile_URI + profileId, headers).then(response => {
            console.log("psots are ============>" + response);
            if (response.profileDetail) {
                self.setState({
                    getProfileResponse: response
                });
            }
            if (response.errorCode) {
                self.setState({ errorMessage: response.message });
            }
        });
    }
    componentWillReceiveProps(){
        if (this.props.profileId){
            this.setState({profileId: this.props.profileId})
            this.getProfileDetails(this.props.profileId);
        }
    }

    componentDidMount(){

    }

    render(){
        let response = this.state.getProfileResponse ? this.state.getProfileResponse:null;
        
        var profileDetail = this.state.profileId ? <profileDetail     firstName={this.state.getProfileResponse}/>:null
  
        return (
            <div>

            </div>
        )
            
        
        
       
    }

}