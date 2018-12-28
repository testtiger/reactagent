import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Login/loginpage";
import DashBoard from "../Dashboard/dashboard";
import CustomerSearchPage from "../CustomerSearch/CustomerSearchPage";
import Navigation from "../Shared/Navigation";
import CustomersInfo from "../Profile/customerInfo";

var Routes = function() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/welcome" component={DashBoard} />
          <Route path="/customers" component={Register} />
          <Route path="/customersinfo" component={CustomersInfo} />
          <Route path="/csearch" component={SearchCriteria} />
          <Route path="*" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
