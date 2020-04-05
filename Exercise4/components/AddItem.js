import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "black",
  },
  btn: {
    backgroundColor: "orange",
    padding: 9,
    margin: 5,
    height: 55,
  },
  btnText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
