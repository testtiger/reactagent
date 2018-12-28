//start it with npm start
//create-react-app MyApp

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./components/Agent/Login/loginpage";
import App from "./components/Agent/App/App";
import CreateOrderPage1 from "./components/Agent/CreateOrder/CreateOrderPage";
import CustomerSearchPage from "./components/Agent/CustomerSearch/CustomerSearchPage";





ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render(<CreateOrderPage />, document.getElementById("root"));

