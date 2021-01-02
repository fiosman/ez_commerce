#

<p align="center">
  <img src="https://i.postimg.cc/BssFrZdH/Screen-Shot-2020-12-24-at-11-24-49-PM.png">
</p>
EzCommerce is an e-commerce web application that offers swift shopping experience.

Development by Fares Osman. This project is not meant to "clone" any well known applications. This is a demo site to showcase my programming knowledge, primarily in backend and frontend web development.

Development period was from September 6, 2020 - December 20, 2020. I worked on this project part time, while being committed to a full time job in a different industry.

## Live Link

You can visit the latest deployed version of the application [here](https://ez-ecomm.herokuapp.com/#/).

## Main Features

### Admin Dashboard

#### Add, Update Product Forms

Users have the ability to upload products via an interactive form through the admin dash. User friendly error messages are also integrated in case of an invalid form field input.

<details>
  <summary>Add Product</summary>
  <img align="center" src="https://i.ibb.co/cT0QQq9/Screen-Shot-2020-12-26-at-12-24-16-AM.png">
</details>

<details>
  <summary>Update Product</summary>
  <img align="center" src="https://i.ibb.co/tBtVHwk/ezgif-6-6dafe6bec3a9.gif">
</details>

<details>
  <summary>Form Errors</summary>
  <img align="center" src="https://i.ibb.co/2d5fC5H/Screen-Shot-2020-12-26-at-12-26-02-AM.png">
</details>

#### Store Inventory

Users can keep track of their uploaded products with the ability to modify and/or delete them.

<details>
  <summary>Product Actions</summary>
  <img align="center" src="https://i.ibb.co/k37ntZ7/Screen-Shot-2020-12-26-at-12-55-48-AM.png">
</details>

<details>
  <summary>Delete Product</summary>
  <img align="center" src="https://i.ibb.co/wzP04d2/ezgif-1-12b469a1e062.gif">
</details>

### Review Products

Logged in users are able to review products via rating and leaving comments.

<details>
  <summary>Review Product</summary>
  <img align="center" src="https://i.ibb.co/SsW0vHJ/ezgif-6-e0288b756d06.gif">
</details>

### Product Filtering System

Users are able to search for products by keyword and filter by category and/or price.

<details>
  <summary>Product Filtering</summary>
  <img align="center" src="https://i.ibb.co/FxpyD39/ezgif-6-fa3d7c5bcae2.gif">
</details>

### Shopping Cart

Users, registered and non-registered, have the ability to add items to their shopping cart.

Items in a guest's shopping cart are transferred over once they sign up.

<details>
  <summary>Shopping Cart</summary>
  <img align="center" src="https://i.ibb.co/Jzw4dc9/ezgif-6-5cd7441f269e.gif">
</details>

The transfer of items in a shopping cart is handled by Rails' Active Record callbacks within the users controller, for example as per below when a user attempts to sign up:

```ruby
class Api::UsersController < ApplicationController
  before_action :current_items, only: [:create]
  after_action :transfer_items, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      Cart.create!(user_id: @user.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
```

The methods `current_items` and `transfer_items` are both defined in the ApplicationController class, which all controllers including the users controller inherit from.

- ApplicationController always keeps track of the current cart for an individual session, whether the guest is logged in or not, as show in `current_cart` below.

```ruby
  def current_cart
    if logged_in?
      @current_cart = current_user.cart
    else
      if session[:cart_token]
        @current_cart = Cart.find_by(cart_token: session[:cart_token])
      else
        @current_cart = Cart.create
        session[:cart_token] = @current_cart.cart_token
      end
    end
  end
```

- When Rails receives a POST request to create a session (i.e. log in ) or create a user (i.e. sign up), before the `create` controller action is run, `current_items` is first executed to store any items within the current cart in an instance variable that is accessible within the `ApplicationController` class.

```ruby
  def current_items
    @line_items = @current_cart.line_items
  end
```

- After the `create` controller action is run, the `transfer_items` callback is executed which takes the current cart (i.e. guest cart) items and adds them to the logged in user's cart.

```ruby
  def transfer_items
    old_cart = @current_cart
    current_cart.add_line_items(@line_items)
    LineItem.where(cart_id: old_cart.id).destroy_all
  end
```

### Frontend Authentication

Functional React components were created to render routes (i.e. React Router) conditionally. For example, we do not want signed in users to be able to visit the sign up page.

```javascript
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  //state here is taken from the Redux store
  loggedIn: Boolean(state.session.id),
  isAdmin: state.session.id
    ? state.entities.users[state.session.id].isAdmin
    : null,
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
```

AuthRoute becomes a reusable component, with which routes that require conditional rendering can be wrapped. For instance, not allowing logged in users to view the signup page.

```javascript
import { AuthRoute, AdminRoute } from "../util/route_util";
import SignupFormContainer from "../components/session_form/signup_form_container";

<AuthRoute path="/signup" exact component={SignupFormContainer} />;
```

## Technologies Used

### Backend

- Ruby on Rails
- PostgreSQL

### Frontend

- React
- Redux
- HTML
- CSS

### Testing Frameworks

- RSpec
- Jest

## Future Work

The below are features I would like to implement in the future

- Functional billing system
- Add analytics (e.g. number of registered users, number of completed/pending orders) to admin dashboard
- Set up mailer
- Add featured products to splash page
- Sorting products by more filters (e.g. alphabetical order, rating)
- Add profile settings to user accounts
- Write more frontend integration tests
- Add more responsiveness to the layout
