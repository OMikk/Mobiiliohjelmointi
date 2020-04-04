import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="text-center pb-1">Number Guessing Game</h1>
        <p className="p-2">Guess a number between 1-100</p>
      </div>
    );
  }
}

export default Header;
