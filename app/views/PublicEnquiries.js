import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

import { createTopTabNavigator, createAppContainer } from "react-navigation";

export class PublicEnquiriesScreen extends React.Component {
  render() {
    return (
      <View>
        <Header firmName="Marvel Steel" />
        <View style={styles.container}></View>
      </View>
    );
  }
}

export class YourEnquiriesScreen extends React.Component {
  render() {
    return (
      <View>
        <Header firmName="Marvel Steel" />
        <View style={styles.container}></View>
      </View>
    );
  }
}

const TabNavigator = createTopTabNavigator({
  PublicEnquiries: PublicEnquiriesScreen,
  YourEnquiries: YourEnquiriesScreen,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default createAppContainer(TabNavigator);
