import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { uuid } from "uuidv4";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
    } else {
      setItems((currentItems) => {
        const currentItemText = currentItems.map((item) => item.text);
        if (!currentItemText.includes(text)) {
          return [{ id: uuid(), text }, ...currentItems];
        } else {
          return [...currentItems];
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
