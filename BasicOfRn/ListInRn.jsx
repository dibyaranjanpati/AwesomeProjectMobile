import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const ListInRn = () => {
  let arr = [
    { name: "Dibya", age: 23 },
    { name: "subham", age: 20 },
    { name: "div", age: 29 },
    { name: "papun", age: 19 },
    { name: "debasish", age: 33 },
    { name: "rama", age: 33 },
    { name: "syama", age: 33 },
    { name: "hari", age: 33 },
  ];
  return (
    <View>
      {/* list in react netive using flatList  */}

      <Text style={{ fontSize: 20, marginTop: 40, marginLeft: 10 }}>
        List in React Netive using FlatList
      </Text>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <Text style={liststyle.item}>{item.name}</Text>
        )}
      />

      {/* list using map function */}

      <ScrollView>
        <Text style={{ fontSize: 20, marginTop: 40, marginLeft: 10 }}>
          List in React Netive using Map Function
        </Text>
        {arr.map((item, i) => (
          <Text style={liststyle.item} key={item.i}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const liststyle = StyleSheet.create({
  item: {
    fontSize: 25,
    margin: 15,
    backgroundColor: "green",
    padding: 20,
    borderColor: "black",
    borderWidth: 2,
    color: "blue",
  },
});

export default ListInRn;
