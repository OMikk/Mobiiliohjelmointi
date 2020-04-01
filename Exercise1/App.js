import React, { Component } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import styles from "./styles.js";

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
          onChangeText={Num1 => {
            this.setState({ Num1 });
          }}
        />
        <TextInput
          style={styles.numbox}
          placeholder="Num2"
          onChangeText={Num2 => {
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
