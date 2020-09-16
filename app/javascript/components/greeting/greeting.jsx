import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  let status;
  if (currentUser) {
    status = (
      <section>
        Welcome {currentUser.username}
        <button onClick={logout}>Logout</button>
      </section>
    );
  } else {
    status = (
      <section>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </section>
    );
  }

  return <div>{status}</div>;
};

export default Greeting;
