import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

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
            {/* <button onClick={this.handleLogout}>Logout</button> */}
            <Button variant="primary">Test</Button>
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
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
        </ul>
      );
    }

    return <nav className="navLinks">{status}</nav>;
  }
}

export default withRouter(Greeting);
