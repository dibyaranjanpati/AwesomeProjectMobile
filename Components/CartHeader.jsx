import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const cartData = useSelector((state) => state.reducer);
  // console.warn(cartData);
  const [cartItem, setCartItem] = useState(0);
  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text>Cart:{cartItem}</Text>
    </View>
  );
};

export default CartHeader;
