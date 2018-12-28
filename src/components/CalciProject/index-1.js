//start it with npm start
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/CalciProject/counter";
import Calculator from "./components/CalciProject/calculator";
//import Numbers from "./components/CalciProject/numbers";
//import Numbers from "./components/CalciProject/operators";
import Calci from "./components/CalciProject/calci";
import Operators from "./components/CalciProject/TestComp";
import Dashboard from "./components/Agent/Dashboard/dashboard";
import LoginPage from "./components/Agent/Login/loginpage";

import login from "./components/Agent/Dashboard/restClient1.js";
//ReactDOM.render(<Counter/>,document.getElementById("root"));

ReactDOM.render(<LoginPage />, document.getElementById("root"));
//ReactDOM.render(<Dashboard />, document.getElementById("root"));
//ReactDOM.render(<Operators />, document.getElementById("root"));

//ReactDOM.render(<Calci/>, document.getElementById("root"));
