import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const UnMountUseEffect = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text>Show/ Hide Components </Text>
      <Button title="Toggle Button" onPress={() => setShow(!show)} />

      {show ? <Child /> : null}
    </View>
  );
};

export default UnMountUseEffect;

const Child = () => {
  let timer = setInterval(() => {
    console.warn("timer called");
  }, 2000);
  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text>Child component</Text>
    </View>
  );
};
