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

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  formHeader() {
    const headerStatus =
      this.props.formType === "signup" ? "Sign up" : "Sign in";
    return (
      <form>
        <h2>{headerStatus}</h2>
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

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
  }

  componentDidMount() {
    console.log("TeST");
  }

  render() {
    return (
      <div>
        <p>{this.props.navLink}</p>
        {this.formHeader()}
        {this.displayErrors()}
      </div>
    );
  }
}

export default SessionForm;
