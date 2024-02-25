import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const SearchBar = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    // console.warn(text);
    const url = `http://192.168.1.42:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
      // console.warn(data);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search here"
        style={{
          margin: 10,
          borderWidth: 2,
          borderColor: "skyblue",
          fontSize: 20,
          marginTop: 50,
        }}
        onChangeText={(text) => searchUser(text)}
      />
      {data.length
        ? data.map((item) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 17 }}>{item.name}</Text>
              <Text style={{ fontSize: 17 }}>{item.age}</Text>
              <Text style={{ fontSize: 17 }}>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchBar;
