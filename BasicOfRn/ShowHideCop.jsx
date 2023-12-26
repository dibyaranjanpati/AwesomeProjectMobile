import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const ShowHideCop = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text>Show/ Hide Components </Text>
      <Button title="Toggle Button" onPress={() => setShow(!show)} />

      {show ? <Child /> : null}
    </View>
  );
};

export default ShowHideCop;

const Child = () => {
  return (
    <View>
      <Text>Child component</Text>
    </View>
  );
};
