import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>EzCommerce</h1>
      <Route path="/" exact component={GreetingContainer} />
    </header>
    <Route path="/login" exact component={LoginFormContainer} />
    <Route path="/signup" exact component={SignupFormContainer} />
  </div>
);

export default App;
