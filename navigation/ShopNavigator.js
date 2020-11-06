import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../screen/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screen/shop/ProductDetailScreen";
import CartScreen from "../screen/shop/CartScreen";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    productsOverview: ProductsOverviewScreen,
    productDetail: ProductDetailScreen,
    cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
