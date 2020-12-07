import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

  handleInput(e) {
    const currInput = e.target.name;

    return this.setState({ [currInput]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push(`/`));
  }

  formHeader() {
    const typeValue = this.props.formType === "login" ? "Login" : "Sign up";

    return (
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={this.handleInput}
            value={this.state.username}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={this.handleInput}
            value={this.state.password}
          />
        </Form.Group>
        <Button onClick={this.handleSubmit} variant="custom" type="submit">
          {typeValue}
        </Button>
      </Form>
    );
  }

  componentDidMount() {
    this.props.clearErrors();
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

  render() {
    const errors = this.props.errors ? this.displayErrors() : "";
    return (
      <div>
        {this.formHeader()}
        {errors}
      </div>
    );
  }
}

export default SessionForm;
