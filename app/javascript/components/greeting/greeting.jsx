import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
        <section>
          Welcome {this.props.currentUser.username}
          <button onClick={this.handleLogout}>Logout</button>
          <Link to="/cart">Cart</Link>
          <Link to="/admin">Admin Dash</Link>
        </section>
      );
    } else {
      status = (
        <section>
          <p>This is the main page lol</p>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
          <Link to="/cart">Cart</Link>
        </section>
      );
    }

    return <div>{status}</div>;
  }
}

export default withRouter(Greeting);
