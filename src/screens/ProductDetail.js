import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.content}>
          <View style={styles.price}>
            <Text style={styles.priceText}>30.000</Text>
          </View>

          <View style={styles.pictureWrapper}>
            <View style={styles.picture}>
              <Text>picture</Text>
            </View>
          </View>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Cold Brew</Text>
          </View>

          <View style={styles.contentContext}>
            <View style={styles.deliveryTems}>
              <Text style={styles.text}>
                Delivery only on <Text style={styles.bold}>Monday to Friday</Text> at <Text style={styles.bold}>1 - 7 pm</Text>
              </Text>
            </View>

            <View>
              <Text style={[styles.text, styles.bold]}>
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
              </Text>
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <View>
              <Text style={[styles.variantTitle, styles.bold]}>Choose a Size</Text>
            </View>

            <View style={styles.variantWrapper}>
              {["R", "L", "XL"].map((item) => {
                return (
                  <TouchableOpacity key={item} style={styles.variantItems}>
                    <Text style={styles.bold}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText, styles.bold]}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const PICTURE_SIZE = 175;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#362115",
  },
  content: {
    marginTop: 268,
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 60,
  },
  price: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBA33",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -50,
    marginLeft: 22,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pictureWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 22,
    marginTop: (PICTURE_SIZE / 2) * -1,
  },
  picture: {
    width: PICTURE_SIZE,
    height: PICTURE_SIZE,
    borderRadius: 9999,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    paddingRight: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    width: PICTURE_SIZE,
    textAlign: "center",
  },
  contentContext: {
    marginHorizontal: 54,
    flex: 1,
  },
  deliveryTems: {
    marginVertical: 15,
  },
  text: {
    color: "#6A4029",
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonWrapper: {
    marginHorizontal: 22,
    marginBottom: 20,
  },
  variantTitle: {
    fontSize: 17,
    textAlign: "center",
  },
  variantWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  variantItems: {
    height: 50,
    width: 50,
    borderRadius: 9999,
    backgroundColor: "#FFBA33",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 70,
    borderRadius: 20,
    backgroundColor: "#6A4029",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
});
