// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../store/store";
import Root from "../components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    store = configureStore({
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    });
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.getState = store.getState();

  ReactDOM.render(
    <Root store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
