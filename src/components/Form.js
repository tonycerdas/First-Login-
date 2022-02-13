import React, { Component } from "react";
import "../style/Form.css";

function Inputs() {
  return (
    <>
      <div className="form">
        <form className="inputs">
          <h2 className="title">Log In</h2>
          <div className="email">
            <label>Email</label>
            <input
              type="text"
              className="email-input"
              placeholder="Type your email"
            ></input>
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              className="password-input"
              placeholder="Type your password"
            ></input>
          </div>

          <button type="submit" value="Submit">
            Go
          </button>
          <section className="social-media">
            <div className="facebook"></div>
            <div className="instagram"></div>
            <div className="twitter"></div>
          </section>
        </form>
      </div>
    </>
  );
}

export default class Form extends Component {
  render() {
    return <Inputs></Inputs>;
  }
}
