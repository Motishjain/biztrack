import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";
import { FlatList } from "react-native-gesture-handler";
import YourEnquiryCard from "./YourEnquiryCard.js";

export class YourEnquiries extends React.Component {
  render() {
    let enquiries = [
      {
        grade: "304",
        form: "Sheet",
        description: "1000kgs",
        quotations: [
          { firmName: "Shubham Pipes", rate: "300", remarks: "Negotiable" },
          { firmName: "Rolex Tubes", rate: "450", remarks: "Negotiable" },
        ],
      },
      {
        grade: "316",
        form: "Coil",
        description: "500kgs",
        quotations: [
          { firmName: "Kenko Sheets", rate: "400", remarks: "Negotiable" },
          { firmName: "Marvel Alloys", rate: "300", remarks: "Negotiable" },
        ],
      },
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={enquiries}
          renderItem={({ item }) => <YourEnquiryCard enquiry={item} />}
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
    alignItems: "center",
    justifyContent: "space-between",
  },
});
