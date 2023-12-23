import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SimpleForn = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const clearDisplay = () => {
    setname("");
    setPassword("");
    setEmail("");
    setDisplay(false);
  };
  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 50, marginBottom: 20 }}>
        Simple react netive form
      </Text>
      <View>
        <Text style={{ fontSize: 20 }}> Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name here"
          onChangeText={(text) => setname(text)}
          value={name}
        />
        <Text style={{ fontSize: 20 }}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password here"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
        />
        <Text style={{ fontSize: 20 }}>Email</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter your Email here"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button
          color={"green"}
          title="Show details "
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button
        color={"red"}
        title="Clear details"
        onPress={() => clearDisplay()}
      />
      <View>
        {display ? (
          <View>
            <Text>The name is {name}</Text>
            <Text>The password is {password}</Text>
            <Text>The Email is {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: "blue",
    borderWidth: 2,
    borderColor: "blue",
    margin: 10,
  },
});

export default SimpleForn;
