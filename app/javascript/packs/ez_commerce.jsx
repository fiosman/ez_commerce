// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import SessionForm from "../components/session_form/session_form";
import { signUpUser, updateUser } from "../util/session_api_util";
import { update, signup, login, logout } from "../actions/session_actions";
import configureStore from "../store/store";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SessionForm />,
    document.body.appendChild(document.createElement("div"))
  );
});

const store = configureStore();
window.signup = signup;
window.update = update;
window.login = login;
window.logout = logout;
window.dispatch = store.dispatch;
window.getState = store.getState;
