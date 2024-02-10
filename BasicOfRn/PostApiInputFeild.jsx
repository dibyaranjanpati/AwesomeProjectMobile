import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const PostApiInputFeild = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  // applying form velidation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const saveData = async () => {
    // applying form validation
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!age) {
      setAgeError(true);
    }
    if ((!name, !age, !email)) {
      return false;
    }

    // console.warn(name);
    // console.warn(age);
    // console.warn(email);
    const url = "http://192.168.1.42:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });
    console.warn("data saved successfully");

    setName("");
    setAge();
    setEmail("");
    setNameError(false);
    setAgeError(false);
    setEmailError(false);
  };
  return (
    <View style={{ margin: 35 }}>
      <Text>post Api using Api feild</Text>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? (
        <Text style={{ color: "red" }}>plese enter name </Text>
      ) : null}
      <TextInput
        placeholder="Enter Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {ageError ? <Text style={{ color: "red" }}>plese enter age </Text> : null}
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? (
        <Text style={{ color: "red" }}>plese enter email </Text>
      ) : null}
      <Button title="save data" onPress={saveData} />
    </View>
  );
};

export default PostApiInputFeild;
