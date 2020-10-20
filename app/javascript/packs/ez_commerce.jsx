// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { store } from "../store/store";
import Root from "../components/root";
import { addReview, removeReview } from "../actions/review_actions";
import { fetchProducts } from "../actions/product_actions";
import { pullCategories } from "../actions/category_actions";

document.addEventListener("DOMContentLoaded", () => {
  window.store = store;
  window.dispatch = store.dispatch;
  window.addReview = addReview;
  window.removeReview = removeReview;
  ReactDOM.render(
    <Root store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
