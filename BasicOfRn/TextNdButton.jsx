import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import extStyle from "./Style";

const TextNdButton = () => {
  const clickMe = (data) => {
    console.warn(data);
  };

  const DeleteMe = (data) => {
    console.warn(data);
  };
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Hello Div</Text>
      <Text style={{ fontSize: 30 }}>its Inline style</Text>
      <Text style={intStyle.style}>its internal style</Text>
      <Text style={extStyle.style}>its external Style</Text>
      <Text style={[intStyle.style, extStyle.style, { fontSize: 50 }]}>
        its all combain Style
      </Text>
      <Button
        onPress={() => clickMe("Hii Div")}
        color={"green"}
        title="Click Here"
      />
      <Button
        onPress={() => clickMe("deleted it")}
        color={"red"}
        title="Delee Here "
      />
    </View>
  );
};
const intStyle = StyleSheet.create({
  style: {
    fontSize: 30,
    color: "green",
    backgroundColor: "blue",
    margin: 5,
    borderRadius: 5,
  },
});

export default TextNdButton;
