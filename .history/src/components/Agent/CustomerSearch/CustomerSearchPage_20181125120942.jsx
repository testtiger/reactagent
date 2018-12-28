import React,{Component} from "react";
import SearchCriteria from "./SearchCriteria";
import SearchResults from "./SearchResults";
class CustomerSearchPage extends Component{

    render(){
        return(
            <SearchCriteria/>
            <SearchResults/>
        )
    }
}

 export default CustomerSearchPage;