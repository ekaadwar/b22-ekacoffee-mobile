// In App.js in a new project

import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";
import Cart from "./src/screens/Cart";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const Stack = createNativeStackNavigator();

const Header = ({ navigation }) => {
  return (
    <View style={headerStyle.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <AntDesign name="shoppingcart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const headerStyle = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#362115",
    paddingHorizontal: 40,
  },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Dashboard" }} />
            <Stack.Screen name="Detail" component={ProductDetail} options={{ header: Header }} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
