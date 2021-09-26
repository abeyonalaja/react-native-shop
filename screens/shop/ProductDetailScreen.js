import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductDetailScreen = (props) => {
  return (
    <View>
      <Text>
        Product Detail Screen {props.navigation.getParam("productId")}
      </Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
