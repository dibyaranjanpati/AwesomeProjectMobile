import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  const [data, setData] = useState(23);
  useEffect(() => {
    // console.warn("you chance the count");
  }, [count]);

  useEffect(() => {
    // console.warn("you chance the data");
  }, [data]);
  return (
    <View>
      <Text style={{ marginTop: 40, color: "red", fontSize: 20 }}>
        useEffect hook in react netive
      </Text>
      <Text style={{ color: "green", fontSize: 20 }}>
        your data is {data},your count is {count}
      </Text>

      <Button title="chance count" onPress={() => setcount(count + 1)} />
      <Button title="chance data" onPress={() => setData(data + 1)} />
      <ChildCop prop={{ data, count }} />
    </View>
  );
};

export default UseEffect;

// props via useEffect

const ChildCop = (props) => {
  useEffect(() => {
    console.warn("run useEffect via count props");
  }, [props.prop.count]);
  useEffect(() => {
    console.warn("run useEffect via data props");
  }, [props.prop.data]);
  return (
    <View>
      <Text>count state via props is {props.prop.count}</Text>
      <Text>data state via props is {props.prop.data}</Text>
    </View>
  );
};
