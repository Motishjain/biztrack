import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

export class YourEnquiries extends React.Component {
  render() {
    return (
      <View>
        <Header firmName="Marvel Steel" />
        <View style={styles.container}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
