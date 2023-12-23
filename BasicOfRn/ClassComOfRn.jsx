import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class ClassComOfRn extends Component {
  constructor() {
    super();
    this.state = {
      name: "Dibya",
    };
  }
  changeTect(text) {
    this.setState({ name: text });
  }
  render() {
    return (
      <View>
        <Text style={{ marginTop: 30, fontSize: 20, color: "red" }}>
          {this.state.name}
        </Text>
        <TextInput
          placeholder="Enter name"
          onChangeText={(text) => this.changeTect(text)}
        />
        <Button title="Click here" />
      </View>
    );
  }
}

export default ClassComOfRn;

// import React, { Component } from 'react'

// export default class ClassComOfRn extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={{ marginTop: 30, fontSize: 20, color: "red" }}>
//           Class components
//         </Text>
//         <TextInput placeholder="Enter name" />
//         <Button title="Click here" />
//       </View>
//     );
//   }
// }
