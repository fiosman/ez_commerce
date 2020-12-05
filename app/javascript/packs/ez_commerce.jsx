import React from "react";
import ReactDOM from "react-dom";
import { store } from "../store/store";
import Root from "../components/root";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
