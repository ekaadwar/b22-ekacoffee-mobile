// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { render } from "react-dom";

const Stack = createNativeStackNavigator();

const Header = ({ navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Dashboard" }} />
            <Stack.Screen name="Detail" component={ProductDetail} options={{ header: Header }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
