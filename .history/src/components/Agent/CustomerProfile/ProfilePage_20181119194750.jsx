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

    componentWillReceiveProps(){
        if (this.props.profileId){
            this.state.profileId = this.props.profileId
        }
    }
    render(){
        if()
    }

}