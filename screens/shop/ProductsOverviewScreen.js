import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewSreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          {...itemData.item}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewSreen.navigationOptions = {
  headerTitle: "Allproducts",
};

export default ProductsOverviewSreen;
