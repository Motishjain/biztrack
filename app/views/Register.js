import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";
import { Header } from "../sections/Header.js";

import { openDatabase } from "react-native-sqlite-storage";
import { TouchableHighlight } from "react-native-gesture-handler";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firmName: "",
      cellNumber: "",
      groupCode: "",
      telecomNumber: "",
    };
  }

  registerAccount = () => {
    if (this.state.firmName != "ssss") {
      Alert.alert("Please enter firm name");
    } else if (!this.state.cellNumber) {
      Alert.alert("Please enter cell number");
    } else if (!this.state.groupCode) {
      Alert.alert("Please enter your market secret code");
    }
    AsyncStorage.setItem("firmName", this.state.firmName);
    this.props.navigation.navigate("Home");
  };

  register = () => {};

  render() {
    return (
      <View>
        <Header firmName="Marvel Steel" />
        <View>
          <Text style={{ fontSize: 40 }}>Registration</Text>
          <TextInput
            placeholder="Firm Name"
            style={styles.inputs}
            onChangeText={(text) => this.setState({ firmName: text })}
            value={this.state.firmName}
          />
          <TextInput
            placeholder="Cell number"
            style={styles.inputs}
            onChangeText={(text) => this.setState({ cellNumber: text })}
            value={this.state.cellNumber}
          />
          <TextInput
            placeholder="Market Secret Code"
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(text) => this.setState({ groupCode: text })}
            value={this.state.groupCode}
          />
          <TextInput
            placeholder="Telecom number (Hughes)"
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(text) => this.setState({ telecomNumber: text })}
            value={this.state.telecomNumber}
          />
          <TouchableHighlight onPress={this.registerAccount}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  inputs: {
    width: "20%",
    alignItems: "center",
  },
});
