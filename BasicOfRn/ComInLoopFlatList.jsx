import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ComInLoopFlatList = () => {
  const arrData = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Eva", email: "eva@example.com" },
    { name: "Frank", email: "frank@example.com" },
    { name: "Grace", email: "grace@example.com" },
  ];
  return (
    <View>
      <Text>Components in loop in flatlist </Text>
      <FlatList
        data={arrData}
        renderItem={({ item }) => <RenderData item={item} />}
      />
    </View>
  );
};

const RenderData = (props) => {
  const item = props.item;
  return (
    <View style={boxStyle.Box}>
      <Text style={boxStyle.item}>{item.name}</Text>
      <Text style={boxStyle.item}>{item.email}</Text>
    </View>
  );
};

const boxStyle = StyleSheet.create({
  Box: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    marginBottom: 10,
  },
  item: {
    textAlign: "center",
    fontSize: 15,
    color: "blue",
    flex: 1,
    margin: 2,
  },
});

export default ComInLoopFlatList;
