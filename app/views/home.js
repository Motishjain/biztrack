import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

import { createAppContainer } from "react-navigation";
import { PublicEnquiries } from "./PublicEnquiries";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { YourEnquiries } from "./YourEnquiries.js";

const TabNavigator = createMaterialTopTabNavigator(
  {
    "Public Enquiries": PublicEnquiries,
    "Your Enquiries": YourEnquiries,
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
