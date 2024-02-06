import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Login = (props) => {
  const [name, setName] = useState("");
  const age = 24;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput
        onChangeText={(Text) => setName(Text)}
        placeholder="Enter Name"
      />
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate("Home", { name, age })}
      />
    </View>
  );
};

export default Login;
