import React, { Component } from "react";

import "../login.css";





class Login extends Component {
  state = { adminInfo: { username: "", password: "" } };

  handleChangeLogin = e => {
    // dont update the state directly clone the state then let react update the state
    const adminInfo = { ...this.state.adminInfo };
    adminInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ adminInfo });
  };

  handleSubmit = e => {
    e.preventDefault();
    const admin = { username: "cpclark360", password: "admin" };
    

    if (
      this.state.adminInfo.username === admin.username &&
      this.state.adminInfo.password === admin.password
    ) {
      this.props.history.push(`/showcontacts`);
    }

    console.log(this.state.adminInfo);
  };

  render() {
    const { adminInfo } = this.state;
    return (
      <main>
        <div classNames="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <input
                autoFocus
                type="text"
                placeholder="username"
                name="username"
                value={adminInfo.username}
                onChange={this.handleChangeLogin}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={adminInfo.password}
                onChange={this.handleChangeLogin}
              />
              <button>login</button>
              <p className="message">
                <a href="#"></a>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
