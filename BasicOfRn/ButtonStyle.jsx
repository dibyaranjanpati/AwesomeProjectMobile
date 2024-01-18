import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const ButtonStyle = () => {
  return (
    <View style={style.main}>
      <TouchableHighlight>
        <Text style={[style.button, style.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.danger]}>Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.primery]}>Primery</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.warning]}>Warning</Text>
      </TouchableHighlight>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: "#bbb",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
  },
  success: { backgroundColor: "green" },
  danger: { backgroundColor: "red" },
  primery: { backgroundColor: "blue" },
  warning: { backgroundColor: "gold" },
});

export default ButtonStyle;
