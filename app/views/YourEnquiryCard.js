import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Quotation from "./quotation";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    padding: 10,
  },
});

export default function YourEnquiryCard({ enquiry }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{enquiry.grade}</Text>
        <Text style={styles.text}>{enquiry.form}</Text>
        <Text style={styles.text}>{enquiry.description}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Firm Name</Text>
        <Text style={styles.text}>Rate</Text>
        <Text style={styles.text}>Remarks</Text>
      </View>
      <FlatList
        data={enquiry.quotations}
        renderItem={({ item }) => <Quotation quotation={item} />}
      />
    </View>
  );
}
