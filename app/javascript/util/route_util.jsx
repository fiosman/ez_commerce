import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
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

const Admin = ({ isAdmin, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      isAdmin ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const AdminRoute = withRouter(connect(mapStateToProps, null)(Admin));
