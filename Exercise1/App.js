import React, { Component } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0, Result: 0 };
  }

  Sum = () => {
    let N1 = parseInt(this.state.Num1);
    let N2 = parseInt(this.state.Num2);
    let R = N1 + N2;
    this.setState({ Result: R });
  };
  Minus = () => {
    let N1 = parseInt(this.state.Num1);
    let N2 = parseInt(this.state.Num2);
    let R = N1 - N2;
    this.setState({ Result: R });
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.result}
          value={"Result: " + this.state.Result}
        />
        <TextInput
          style={styles.numbox}
          placeholder="Num1"
          onChangeText={(Num1) => {
            this.setState({ Num1 });
          }}
        />
        <TextInput
          style={styles.numbox}
          placeholder="Num2"
          onChangeText={(Num2) => {
            this.setState({ Num2 });
          }}
        />
        <View style={styles.container}>
          <View style={styles.button1}>
            <Button title="+" onPress={this.Sum} />
          </View>
          <View style={styles.button2}>
            <Button title="-" onPress={this.Minus} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button1: {
    width: "10%",
    height: 40,
    marginLeft: "50%",
    paddingRight: "0.5%",
  },
  button2: {
    width: "10%",
    height: 40,
    marginRight: "50%",
    paddingLeft: "0.5%",
  },
  numbox: {
    borderWidth: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginLeft: "25%",
  },
  result: {
    margin: 5,
    textAlign: "center",
    fontSize: 24,
  },
});
