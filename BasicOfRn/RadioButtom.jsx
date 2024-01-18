import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButtom = () => {
  const skills = [
    { id: 1, Name: "javascript" },
    { id: 2, Name: "java" },
    { id: 3, Name: "php" },
    { id: 4, Name: "sql" },
    { id: 5, Name: "node js" },
    { id: 6, Name: ".net" },
  ];
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <View style={style.main}>
      {/* <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={style.radioWraper}>
          <View style={style.radio}>
            {selectedRadio === 1 ? <View style={style.RadioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={style.radioWraper}>
          <View style={style.radio}>
            {selectedRadio === 2 ? <View style={style.RadioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(3)}>
        <View style={style.radioWraper}>
          <View style={style.radio}>
            {selectedRadio === 3 ? <View style={style.RadioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio 3</Text>
        </View>
      </TouchableOpacity> */}

      {/* in a dynamic way with array */}

      {skills.map((item, i) => (
        <TouchableOpacity onPress={() => setSelectedRadio(item.id)} key={i}>
          <View style={style.radioWraper}>
            <View style={style.radio}>
              {selectedRadio === item.id ? (
                <View style={style.RadioBg}></View>
              ) : null}
            </View>
            <Text style={style.radioText}>{item.Name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  RadioBg: {
    backgroundColor: "black",
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default RadioButtom;
