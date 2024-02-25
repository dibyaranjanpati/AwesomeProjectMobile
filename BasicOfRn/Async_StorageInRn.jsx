import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Async_StorageInRn = () => {
  const [user, setUser] = useState("");
  const setdata = async () => {
    await AsyncStorage.setItem("user", "dibyaranjan");
  };

  const getdata = async () => {
    const data = await AsyncStorage.getItem("user");
    // console.warn(data);
    setUser(data);
  };

  const removeData = async () => {
    await AsyncStorage.removeItem("user");
    // console.warn(data);
    setUser("");
  };
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={{ fontSize: 30 }}>Async storage store name is:{user}</Text>
      <Button title="setdata" onPress={setdata} />
      <Button title="getdata" onPress={getdata} />
      <Button title="removeData" onPress={removeData} />
    </View>
  );
};

export default Async_StorageInRn;
