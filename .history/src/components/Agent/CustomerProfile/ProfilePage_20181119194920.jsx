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

    makeGetCall
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