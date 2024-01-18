import React from "react";
import { StyleSheet, View } from "react-native";

const FlexResponsive = () => {
  return (
    <View style={style.main}>
      <View style={style.box1}>
        <View style={style.innerBox1}></View>
        <View style={style.innerBox2}></View>
        <View style={style.innerBox3}></View>
      </View>
      <View style={style.box2}></View>
      <View style={style.box3}></View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
  },
  box2: {
    flex: 1,
    backgroundColor: "green",
  },
  box3: {
    flex: 1,
    backgroundColor: "blue",
  },
  innerBox1: {
    flex: 1,
    backgroundColor: "black",
    margin: 4,
  },
  innerBox2: {
    flex: 1,
    backgroundColor: "green",
    margin: 4,
  },
  innerBox3: {
    flex: 1,
    margin: 4,
    backgroundColor: "blue",
  },
});

export default FlexResponsive;
