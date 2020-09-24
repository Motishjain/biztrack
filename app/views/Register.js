import React from "react";
const axios = require("axios");

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";

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
      isActive: true,
      registrationDate: Date.now().toString(),
    };
  }

  registerAccount = async () => {
    if (this.state.firmName == "" || this.state.firmName == null) {
      alert("Please enter firm name");
    } else if (this.state.cellNumber == "" || this.state.cellNumber == null) {
      alert("Please enter cell number");
    } else if (this.state.groupCode == "" || this.state.groupCode == null) {
      alert("Please enter your market secret code");
    } else if (
      this.state.telecomNumber == "" ||
      this.state.telecomNumber == null
    ) {
      alert("Please enter your telecom number");
    } else {
      AsyncStorage.setItem("firmName", this.state.firmName);
      try {
        console.log(JSON.stringify(this.state));
        const a = await fetch("http://localhost:8080/firms/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }).then((response) => {
          console.log(response.json());
        });
        this.props.navigation.navigate("Home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  register = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Text style={styles.textContainer}>You are ready to go with</Text>
          <Text style={styles.textContainer}>BizTrack</Text>
          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>
              Register Your Firm
            </Text>
            <View style={styles.mainForm}>
              <View style={styles.formItems}>
                <TextInput
                  style={styles.input}
                  placeholder="Firm Name"
                  onChangeText={(text) => this.setState({ firmName: text })}
                  value={this.state.firmName}
                />
              </View>
              <View style={styles.formItems}>
                <TextInput
                  style={styles.input}
                  placeholder="Cell number"
                  keyboardType="numeric"
                  onChangeText={(text) => this.setState({ cellNumber: text })}
                  value={this.state.cellNumber}
                />
              </View>
              <View style={styles.formItems}>
                <TextInput
                  style={styles.input}
                  placeholder="Market Secret Code"
                  keyboardType="numeric"
                  onChangeText={(text) => this.setState({ groupCode: text })}
                  value={this.state.groupCode}
                />
              </View>
              <View style={styles.formItems}>
                <TextInput
                  style={styles.input}
                  placeholder="Telecom number (Hughes)"
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    this.setState({ telecomNumber: text })
                  }
                  value={this.state.telecomNumber}
                />
              </View>
              <View style={styles.button}>
                <TouchableHighlight
                  block
                  style={styles.mainBtn}
                  onPress={this.registerAccount}
                >
                  <Text style={styles.btnText}>Register</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "black",
  },
  top: {
    position: "relative",
    backgroundColor: "black",
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    zIndex: 3,
    backgroundColor: "transparent",
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: "relative",
    height: "100%",
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: "#5257F2",
  },
  textContainer: {
    color: "#FCFDFF",
    fontSize: 24,
    marginBottom: 10,
    position: "relative",
    top: "10%",
    alignSelf: "center",
  },
  formArea: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    top: "20%",
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: "#2D3057",
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: "#2D3057",
    paddingLeft: 20,
  },
  input: {
    fontSize: 12,
    alignSelf: "center",
    width: "50%",
  },
  loginAs: {
    paddingLeft: 46.6,
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  loginText: {
    color: "#2D3057",
    fontSize: 10,
    fontWeight: "bold",
  },
  cboxText: {
    fontSize: 10,
  },
  button: {
    padding: 30.8,
    borderRadius: 4,
    height: "100%",
  },
  mainBtn: {
    backgroundColor: "black",
    width: "50%",
    height: "20%",
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 19,
    alignSelf: "center",
    paddingTop: 6,
  },
});
