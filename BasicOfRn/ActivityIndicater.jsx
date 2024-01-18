import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";

const ActivityIndicater = () => {
  const [show, setshow] = useState(false);
  const displayLoader = () => {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 5000);
  };
  return (
    <View style={style.main}>
      {/* <ActivityIndicator size={50} color={"red"} animating={show} /> */}

      {/* another way  */}

      {show ? (
        <ActivityIndicator size={50} color={"red"} animating={show} />
      ) : null}

      {/* <Button title=" Loader toggle" onPress={() => setshow(!show)} /> */}

      {/* in dnamic wayfo call api */}
      <Button title=" Show Loader" onPress={() => displayLoader()} />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ActivityIndicater;
