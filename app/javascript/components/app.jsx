import React from "react";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute, AdminRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import AdminDashContainer from "../components/admin_dashboard/admin_dash_container";
import EditProductContainer from "../components/product/edit_product_container";
import AddProductContainer from "../components/product/add_product_container";
import CategoryFormContainer from "../components/category/category_form_container";
import InventoryIndexContainer from "../components/inventory/inventory_index_container";
import SplashContainer from "../components/splash/splash_container";
import ProductShowContainer from "../components/product/product_show_container";
import CartContainer from "../components/cart/cart_container";
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
      <Route path="/" exact component={SplashContainer} />
      <Route path="/products/:productId" component={ProductShowContainer} />
      <Route path="/cart" exact component={CartContainer} />
    </Switch>
  </div>
);

export default App;
