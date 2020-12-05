import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
            <Link to="/">
              <Button variant="custom">Home</Button>
            </Link>
          </li>
          <li>
            <Button variant="custom" onClick={this.handleLogout}>
              Logout
            </Button>
          </li>
          <li>
            <Link to="/admin">
              <Button variant="custom">Admin</Button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="shopping-cart"
                size="lg"
                style={{ color: "#800080" }}
              />
            </Link>
          </li>
        </ul>
      );
    } else {
      status = (
        <ul>
          <li>
            <Link to="/">
              <Button variant="custom">Home</Button>
            </Link>
          </li>
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
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="shopping-cart"
                size="lg"
                style={{ color: "#800080" }}
              />
            </Link>
          </li>
        </ul>
      );
    }

    return <nav className="navLinks">{status}</nav>;
  }
}

export default withRouter(Greeting);
