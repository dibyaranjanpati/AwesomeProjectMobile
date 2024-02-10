import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SecListOfRn from "./BasicOfRn/SecListOfRn";
import ClassComOfRn from "./BasicOfRn/ClassComOfRn";
import UseEffect from "./BasicOfRn/UseEffect";
import ShowHideCop from "./BasicOfRn/ShowHideCop";
import UnMountUseEffect from "./BasicOfRn/UnMountUseEffect";
import FlexResponsive from "./BasicOfRn/FlexResponsive";
import ButtonStyle from "./BasicOfRn/ButtonStyle";
import RadioButtom from "./BasicOfRn/RadioButtom";
import ActivityIndicater from "./BasicOfRn/ActivityIndicater";
import ModalInReactNetive from "./BasicOfRn/ModalInReactNetive";
import PressableInRN from "./BasicOfRn/PressableInRN";
import StatusCodeinRN from "./BasicOfRn/StatusCodeinRN";
import WebViewInRn from "./BasicOfRn/WebViewInRn";
import CustomModalInRn from "./BasicOfRn/CustomModalInRn";
import StackNevInRn from "./BasicOfRn/StackNevInRn";
import TabNavOfRn from "./BasicOfRn/TabNavOfRn";
import ApiCallInRn from "./BasicOfRn/ApiCallInRn";
import GetdatafromJsonApi from "./BasicOfRn/GetdatafromJsonApi";
import PostApiInputFeild from "./BasicOfRn/PostApiInputFeild";
import CrudWithJsonApi from "./Components/CrudWithJsonApi";
// import SimpleForn from "./BasicOfRn/SimpleForn";
// import Textinput from "./BasicOfRn/TextInput";
// import TextNdButton from "./BasicOfRn/TextNdButton";
// import ListInRn from "./BasicOfRn/ListInRn";
// import DynamicGrid from "./BasicOfRn/DynamicGrid";
// import ComInLoopFlatList from "./BasicOfRn/ComInLoopFlatList";
// import SectionListOfRn from "./BasicOfRn/SectionListOfRn";
// import SectionListRn from "./BasicOfRn/SectionListRn";
// import SecListOfRn from "./BasicOfRn/SecListOfRn";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Yes it run on you phone without the usb cable </Text>
    //   <Text>its happen again </Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
      <CrudWithJsonApi />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
