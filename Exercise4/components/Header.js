import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.text}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    textAlign: "center",
    backgroundColor: "orange",
    height: 50,
  },
});

export default Header;
