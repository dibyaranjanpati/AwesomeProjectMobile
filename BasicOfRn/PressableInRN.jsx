import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableInRN = () => {
  return (
    <View style={style.main}>
      <Pressable
        // onPress={() => console.warn("narmal  press")}
        onLongPress={() => console.warn("long  press")}
        delayLongPress={2000} // delay the long press 0.5 sec to 2 sec
        // onPressIn={() => console.warn("in  press")}
        onPressOut={() => console.warn("out  press")}
      >
        <Text style={style.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
  },
  pressableBtn: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    shadowColor: "#000",
    elevation: 5,
  },
});

export default PressableInRN;
