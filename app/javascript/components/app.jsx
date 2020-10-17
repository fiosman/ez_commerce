import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute, AdminRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import AdminDashContainer from "../components/admin_dashboard/admin_dash_container";
import EditProductContainer from "../components/product/edit_product_container";
import AddProductContainer from "../components/product/add_product_container";
import CategoryFormContainer from "../components/category/category_form_container";
import InventoryIndexContainer from "../components/inventory/inventory_index_container";
import Splash from "../components/splash/splash";
import ProductShow from "../components/product/product_show";

const App = () => (
  <div>
    <header>
      <h1>EzCommerce</h1>
    </header>
    <Switch>
      <AdminRoute path="/admin" exact component={AdminDashContainer} />
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignupFormContainer} />
      <AdminRoute
        path="/admin/product/new"
        exact
        component={AddProductContainer}
      />
      <AdminRoute
        path="/admin/product/:productId/edit"
        component={EditProductContainer}
      />
      <AdminRoute
        path="/admin/category/new"
        component={CategoryFormContainer}
      />
      <AdminRoute path="/admin/inventory" component={InventoryIndexContainer} />
      <Route path="/" exact component={Splash} />
      <Route path="/products/:productId" component={ProductShow} />
    </Switch>
  </div>
);

export default App;
