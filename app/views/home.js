import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";

export class PublicEnquiriesScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

export class YourEnquiriesScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}></View>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    "Public Enquiries": PublicEnquiriesScreen,
    "Your Enquiries": YourEnquiriesScreen,
  },
  {
    tabBarPosition: "top",
    tabBarOptions: {
      activeTintColor: "#222",
      activeBackgroundColor: "yellow", //Doesn't work
      showIcon: true,
      tabStyle: {
        padding: 0,
        margin: 0, //Padding 0 here
      },
      iconStyle: {
        width: 30,
        height: 30,
        padding: 0, //Padding 0 here
      },
      labelStyle: {
        margin: 10,
        paddingTop: 10,
      },
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

const Navigator = createAppContainer(TabNavigator);

export class Home extends React.Component {
  render() {
    return <Navigator style={{ paddingTop: 10 }} />;
  }
}
