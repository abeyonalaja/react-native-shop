import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import ProductsOverviewSreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewSreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
