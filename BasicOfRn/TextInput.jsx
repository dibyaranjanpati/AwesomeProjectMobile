import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

const Textinput = () => {
  const [value, setValue] = useState("");
  return (
    <View>
      <Text>handle text input</Text>
      <Text>handle text input</Text>
      <Text>The Value Is :{value}</Text>
      <TextInput
        style={style.textInput}
        placeholder="define the value"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Button onPress={() => setValue("")} title="clear the text" />
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: "blue",
    borderWidth: 2,
    borderColor: "blue",
    margin: 10,
  },
});

export default Textinput;
