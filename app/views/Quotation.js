import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    padding: 10,
  },
});

export default function Quotation({ quotation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quotation.firmName}</Text>
      <Text style={styles.text}>{quotation.rate}</Text>
      <Text style={styles.text}>{quotation.remarks}</Text>
    </View>
  );
}
