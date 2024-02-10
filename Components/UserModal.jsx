import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UserModal = ({ setOpenModal, selectedData, getApiData }) => {
  const [name, setname] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [age, setAge] = useState(undefined);
  //   console.warn(selectedData);

  useEffect(() => {
    if (selectedData) {
      setAge(selectedData.age.toString());
      setname(selectedData.name);
      setEmail(selectedData.email);
    }
  }, [selectedData]);

  const updateUser = async () => {
    // console.warn(name, age, email);
    const url = "http://192.168.1.42:3000/users";
    const id = selectedData.id;
    let result = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });
    // result = await result.json();
    // if (result) {
    //   console.warn(result);
    // }
    setOpenModal(false);
    getApiData();
  };
  return (
    <View style={style.centeredView}>
      <View style={style.modalView}>
        <Text> Name </Text>
        <TextInput
          value={name}
          onChangeText={(text) => setname(text)}
          style={style.input}
        />
        <Text> Age </Text>
        <TextInput
          style={style.input}
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <Text> Email </Text>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={{ marginBottom: 15 }}>
          <Button title="Update" onPress={() => updateUser()} />
        </View>
        <Button title="close" onPress={() => setOpenModal(false)} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 60,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "skyblue",
    width: 300,
    marginBottom: 15,
  },
});
export default UserModal;
