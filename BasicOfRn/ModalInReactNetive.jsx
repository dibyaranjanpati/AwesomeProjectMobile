import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalInReactNetive = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={style.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Hello Mr. Dibya</Text>
            <Button title="Close" onPress={() => setShowModal(!showModal)} />
          </View>
        </View>
      </Modal>
      <View style={style.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default ModalInReactNetive;
