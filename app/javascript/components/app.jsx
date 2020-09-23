import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import AuthRoute from "../util/route_util";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>EzCommerce</h1>
    </header>
    <Switch>
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignupFormContainer} />
      <Route path="/" exact component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
