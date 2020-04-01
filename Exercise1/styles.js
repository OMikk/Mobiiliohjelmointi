import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button1: {
    width: "10%",
    height: 40,
    marginLeft: "50%",
    paddingRight: "0.5%"
  },
  button2: {
    width: "10%",
    height: 40,
    marginRight: "50%",
    paddingLeft: "0.5%"
  },
  numbox: {
    borderWidth: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginLeft: "25%"
  },
  result: {
    margin: 5,
    textAlign: "center",
    fontSize: 24
  }
});

export default styles;
