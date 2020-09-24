import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PublicEnquiryCard from "./PublicEnquiryCard";

export class PublicEnquiries extends React.Component {
  render() {
    let enquiries = [
      { grade: "304", form: "Sheet", description: "1000kgs" },
      { grade: "316", form: "Coil", description: "500kgs" },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={enquiries}
          renderItem={({ item }) => <PublicEnquiryCard enquiry={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
});
