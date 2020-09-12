import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";

import { openDatabase } from "react-native-sqlite-storage";

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Header firmName="Marvel Steel" />
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>Registration</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
