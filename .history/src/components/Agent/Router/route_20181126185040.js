import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Login/loginpage";
import DashboardPage from "../Dashboard/DashboardPage";
import CustomerSearchPage from "../CustomerSearch/CustomerSearchPage";
import Registration from "../CustomerSearch/Registration";
import ProfileInfo from "../CustomerSearch/Registration";
import Navigation from "../Shared/Navigation";
import CustomersInfo from "../Profile/customerInfo";

var Routes = function() {
  return <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/welcome" component={DashboardPage} />
          <Route exact path="/customers" component={CustomerSearchPage} />
          <Route exact path="/customers/registration" component={Registration} />
        <Route exact path="/customers/profile" component={Registration} />
          <Route path="*" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>;
};

export default Routes;
