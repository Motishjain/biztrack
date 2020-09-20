import React from "react";
import { Register } from "./app/views/Register.js";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Home } from "./app/views/Home.js";

const MyRoutes = createSwitchNavigator(
  {
    Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(MyRoutes);
