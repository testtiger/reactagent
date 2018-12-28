import React,{Component} from "react";
import ProfileDetails from "./ProfileDetails";

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
                self.setState({ profileDetail: response.profileDetail });
            }
            if (response.errorCode) {
                self.setState({ errorMessage: response.message });
            }
        });
    }
    componentWillReceiveProps(){
        if (this.props.profileId){
            this.state.profileId = this.props.profileId
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