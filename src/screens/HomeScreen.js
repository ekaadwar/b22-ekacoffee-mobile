import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(20)].map((_i, idx) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")} key={String(idx)} style={styles.productCard}>
              <View style={styles.image}>
                <Icons name="user-circle" color="yellow" size={30} />
              </View>
              <Text style={styles.productName}>Hazelnut Latte</Text>
              <Text style={styles.productPrice}>IDR 30.000</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#F2F2F2",
  },
  productCard: {
    backgroundColor: "#fff",
    height: 270,
    width: 220,
    borderRadius: 30,
    elevation: 5,
    margin: 38,
    alignItems: "center",
    marginTop: 98,
  },
  image: {
    width: 168,
    height: 189,
    backgroundColor: "grey",
    borderRadius: 20,
    marginTop: -60,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#6A4029",
  },
});
