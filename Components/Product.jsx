import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./Redux/action";

const Product = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.mobile));
    setIsAdded(false);
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach((element) => {
        if (element.mobile === item.mobile) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  return (
    <View>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 20 }}>{item.mobile}</Text>
      <Text>{item.color}</Text>
      <Text style={{ fontSize: 15 }}>MRP: {item.price} /-</Text>
      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;
