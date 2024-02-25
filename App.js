import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SimpleForn from "./BasicOfRn/SimpleForn";
import Textinput from "./BasicOfRn/TextInput";
import TextNdButton from "./BasicOfRn/TextNdButton";
import ListInRn from "./BasicOfRn/ListInRn";
import DynamicGrid from "./BasicOfRn/DynamicGrid";
import ComInLoopFlatList from "./BasicOfRn/ComInLoopFlatList";
// import SectionListOfRn from "./BasicOfRn/SectionListOfRn";
// import SectionListRn from "./BasicOfRn/SectionListRn";
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
import SearchBar from "./Components/SearchBar";
import RefInRn from "./BasicOfRn/RefInRn";
import Async_StorageInRn from "./BasicOfRn/Async_StorageInRn";
import Product from "./Components/Product";
import CartHeader from "./Components/CartHeader";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";

export default function App() {
  const products = [
    {
      mobile: "Samsung Mobile ",
      color: "black",
      price: 30000,
      image: "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
    },
    {
      mobile: "Apple i phone ",
      color: "blue",
      price: 90000,
      image: "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
    },
    {
      mobile: "Realme Mobile ",
      color: "white",
      price: 20000,
      image: "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
    },
    {
      mobile: "Redmi Mobile ",
      color: "white",
      price: 15000,
      image: "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
    },
    {
      mobile: "Iqoo Mobile ",
      color: "white",
      price: 25000,
      image: "https://cdn-icons-png.flaticon.com/512/4477/4477610.png",
    },
  ];
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        // <Text>Yes it run on you phone without the usb cable </Text>
        // <Text>its happen again </Text>
        // <StatusBar style="auto" />
      </View> */}
      <View style={styles.container}>
        <CartHeader />
        <ScrollView>
          {products.map((item) => (
            <Product item={item} />
          ))}
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
