import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Login/loginpage";
import DashboardPage from "../Dashboard/DashboardPage";
import CustomerSearchPage from "../CustomerSearch/CustomerSearchPage";
import Registration from "../CustomerSearch/Registration";
import CustomerProfilePage from "../CustomerProfile/CustomerProfilePage.jsx";
import Navigation from "../Shared/Navigation";
import CreateOrderPage from "../CreateOrder/CreateOrderPage";

var Routes = function() {
  return <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/welcome" component={DashboardPage} />
          <Route exact path="/customers" component={CustomerSearchPage} />
          <Route exact path="/customers/registration" component={Registration} />
          <Route exact path="/customers/profiles/:id" component={CustomerProfilePage} />
          <Route exact path="/createOrder/:pid" component={CreateOrderPage} />
          <Route path="*" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>;
};

export default Routes;