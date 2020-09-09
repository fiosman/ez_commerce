import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    e.preventDefault();
  }

  handleInput() {}

  render() {
    return (
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={this.handleInput}
            value={this.state.username}
          ></input>
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={this.handleInput}
            value={this.state.password}
          ></input>
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default SessionForm;
