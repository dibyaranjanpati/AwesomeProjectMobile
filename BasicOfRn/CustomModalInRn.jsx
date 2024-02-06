import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CustomModalInRn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={style.container}>
      {openModal ? (
        <View style={style.modal}>
          <View style={style.body}>
            <Text>hii mr. Div</Text>
            <Button title="close" onPress={() => setOpenModal(false)} />
          </View>
        </View>
      ) : null}

      <Button title="open modal" onPress={() => setOpenModal(true)} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#fff",
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: "flex-end",
    borderRadius: 10,
  },
});

export default CustomModalInRn;
