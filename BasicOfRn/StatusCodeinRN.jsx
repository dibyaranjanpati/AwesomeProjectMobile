import React, { useState } from "react";
import { Button, StatusBar, View } from "react-native";

const StatusCodeinRN = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar backgroundColor={"red"} barStyle={barStyle} hidden={hide} />
      <Button title="toggle status bar" onPress={() => setHide(!hide)} />
      <Button
        title="change style"
        onPress={() => setBarStyle("dark-content")}
      />
    </View>
  );
};

export default StatusCodeinRN;
