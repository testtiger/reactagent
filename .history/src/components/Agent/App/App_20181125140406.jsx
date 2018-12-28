import React,{Component} from "react";
import LoginPage from "../Login/loginpage";
import Routes from "../Router/route";
import SearchCriteria from "../CustomerSearch/SearchCriteria";
import Register from "../CustomerSearch/Register";



export default class App extends Component {

    render(){
              return <Routes />
              //return <LoginPage />;
            }
}

/***
 * TODO : token expiry logic
 * 
 * 
 */