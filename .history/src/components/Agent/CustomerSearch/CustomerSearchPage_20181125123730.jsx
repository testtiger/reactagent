import React,{Component} from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import { makeGetCall } from "../Rest/agent-rest-client";
class CustomerSearchPage extends Component{

    constructor(props){
        super(props);
        this.state={
            se:[];
        }
    }
    getCustomers(){
        var self=this;
        var uri="";
        var headers={}
        var queryParams={}

        makeGetCall(uri,headers,queryParams).then(response =>{
            response.
        })
    }
    render(){

        return(
            <SearchCriteria/>
            <SearchResults/>
        )
    }
}

 export default CustomerSearchPage;