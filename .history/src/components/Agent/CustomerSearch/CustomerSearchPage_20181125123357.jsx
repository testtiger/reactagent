import React,{Component} from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
import { makeGetCall } from "../Rest/agent-rest-client";
class CustomerSearchPage extends Component{

    getCustomer(){
        var self=this;
        var uri="";
        var headers={}
        var queryParams={}
        
        ma
    }
    render(){

        return(
            <SearchCriteria/>
            <SearchResults/>
        )
    }
}

 export default CustomerSearchPage;