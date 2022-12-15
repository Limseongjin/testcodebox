import React, { Component } from "react";

class UserFormClass extends Component {
  state = { name: "", email: "" };

  handleClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email } = this.state;

    return (
      <>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleClick}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleClick}
          />
        </label>
      </>
    );
  }
}

export default UserFormClass;
