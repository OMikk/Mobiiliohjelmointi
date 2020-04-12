import React, { useRef, useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [history, setHistory] = useState([]);

  const initialFocus = useRef(null);

  const calculate = (operator) => {
    console.log(num1, num2, operator);
    const [number1, number2] = [Number(num1), Number(num2)];
    let result;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
    }
    setResultText(result);
    setHistory([
      ...history,
      {
        key: String(history.lenght),
        text: `${number1} ${operator} ${number2} = ${result}`,
      },
    ]);
    setNum1("");
    setNum2("");
    initialFocus.current.focus();
  };

  return (
    <View styles={styles.container}>
      <Text styles={styles.result}>Result: {resultText} </Text>
      <TextInput
        ref={initialFocus}
        keyboardType="number-pad"
        style={styles.input}
        placeholder="Num1"
        onChangeText={(text) => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Num2"
        onChangeText={(text) => setNum2(text)}
        value={num2}
      ></TextInput>
      <View style={styles.box}>
        <View style={styles.button}>
          <Button title="+" onPress={() => calculate("+")} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={() => calculate("-")} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={history}
          ListHeaderComponent={<Text>History</Text>}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  listContainer: {
    height: "50%",
  },
  button: {
    width: "20%",
  },
  input: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
