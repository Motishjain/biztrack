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
});

export default function PublicEnquiryCard({ enquiry }) {
  return (
    <View style={styles.container}>
      <Text>{enquiry.grade}</Text>
      <Text>{enquiry.form}</Text>
      <Text>{enquiry.description}</Text>
      <Button title="Send Quote Privately" onPress={() => {}}>
        Send Quote Privately
      </Button>
    </View>
  );
}
