import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

import { createAppContainer } from "react-navigation";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";

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

const TabNavigator = createMaterialTopTabNavigator({
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

export class Home extends React.Component {
  render() {
    return createAppContainer(TabNavigator);
  }
}
