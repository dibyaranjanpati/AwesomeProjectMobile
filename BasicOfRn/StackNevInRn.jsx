import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Login from "../Components/Login";
const StackNevInRn = () => {
  const btnAction = () => {
    console.warn("button press update");
  };
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          // title: "User Login",
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Button onPress={btnAction} title="left" />,
            headerRight: () => <Header />,
            title: "User Login",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

// const Header = () => {
//   return <TextInput placeholder="name" />;
// };

// const Home = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 30 }}>Home Screen</Text>
//     </View>
//   );
// };
// const Login = (props) => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 30 }}>Login Screen</Text>
//       <Button
//         title="Go to home"
//         onPress={() => props.navigation.navigate("Home")}
//       />
//     </View>
//   );
// };

export default StackNevInRn;
