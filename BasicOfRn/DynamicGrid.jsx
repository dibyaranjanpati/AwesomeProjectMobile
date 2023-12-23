import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DynamicGrid = () => {
  const aryList = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
  ];
  return (
    <View>
      <Text style={{ margin: 30, fontSize: 20 }}>
        Dynamic Grid in react netive{" "}
      </Text>

      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {aryList.map((item, i) => (
          <Text style={styles.grid} key={i}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    color: "white",
    fontSize: 25,
    backgroundColor: "blue",
    margin: 10,
    padding: 5,
    textAlign: "center",
    width: 120,
  },
});

export default DynamicGrid;
