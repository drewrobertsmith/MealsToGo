import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    //backgroundColor: "green",
    padding: 16,
  },
  listContainer: {
    flex: 1,
    //backgroundColor: "blue",
    padding: 16,
  },
});
