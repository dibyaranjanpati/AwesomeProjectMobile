import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import UserModal from "./UserModal";

const CrudWithJsonApi = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState(undefined);

  const getApiData = async () => {
    const url = "http://192.168.1.42:3000/users";
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const deleteData = async (id) => {
    const url = "http://192.168.1.42:3000/users";
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      console.warn("Data Deleted");
    }
    getApiData();
  };

  const updateData = (item) => {
    setOpenModal(!openModal);
    setSelectedData(item);
    // console.warn(selectedData);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.dataWraper}>
        <Text style={{ flex: 1 }}>Name</Text>
        <Text style={{ flex: 2 }}>Age</Text>
        <Text style={{ flex: 2 }}>Operatin</Text>
      </View>
      {data.length
        ? data.map((item) => (
            <View key={item.id} style={style.dataWraper}>
              <Text style={{ flex: 1 }}>{item.name}</Text>
              <Text style={{ flex: 1 }}>{item.age}</Text>
              {/* <Text style={{ flex: 1 }}>{item.email}</Text> */}
              <Button
                title="Delete"
                style={{ flex: 1 }}
                onPress={() => deleteData(item.id)}
              />
              <Button
                title="Update"
                style={{ flex: 1 }}
                onPress={() => updateData(item)}
              />
            </View>
          ))
        : null}
      <Modal visible={openModal} transparent={true}>
        <UserModal
          setOpenModal={setOpenModal}
          selectedData={selectedData}
          getApiData={getApiData}
        />
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  dataWraper: {
    margin: 5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
  },
});
export default CrudWithJsonApi;
