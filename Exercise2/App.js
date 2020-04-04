import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import GuessGame from "./GuessGame";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameKey: true
    };

    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.setState(prevState => ({
      gameKey: !prevState.gameKey
    }));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <GuessGame key={this.state.gameKey} newGame={this.newGame} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
