import React, { useRef } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const RefInRn = () => {
  const focous = useRef();

  const focousInput = () => {
    focous.current.focus();
    // console.warn("hello");
    focous.current.setNativeProps({
      fontSize: 20,
      borderColor: "red",
    });
  };

  return (
    <View style={style.container}>
      <TextInput
        ref={focous}
        placeholder="Enter Your Name"
        style={style.input}
      />
      <TextInput placeholder="Enter Your Password" style={style.input} />
      <Button title="update" onPress={focousInput} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    margin: 10,
    borderColor: "skyblue",
    fontSize: 15,
  },
});

export default RefInRn;
