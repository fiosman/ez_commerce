// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import SessionForm from "../components/session_form/session_form";
import { signUpUser, updateUser } from "../util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SessionForm />,
    document.body.appendChild(document.createElement("div"))
  );
});

window.signUpUser = signUpUser;
window.updateUser = updateUser;
