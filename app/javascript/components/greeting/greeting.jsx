import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MDBIcon from "mdbreact";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    let status;
    if (this.props.currentUser) {
      status = (
        <ul>
          <li>Welcome {this.props.currentUser.username}</li>
          <li>
            <Button variant="custom" onClick={this.handleLogout}>
              Logout
            </Button>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dash</Link>
          </li>
        </ul>
      );
    } else {
      status = (
        <ul>
          <li>
            <Link to="/signup">
              <Button variant="custom">Sign up</Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button variant="custom">Log in</Button>
            </Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      );
    }

    return <nav className="navLinks">{status}</nav>;
  }
}

export default withRouter(Greeting);
