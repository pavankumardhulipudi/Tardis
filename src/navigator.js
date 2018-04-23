/**
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text } from "react-native";
import { StackNavigator, SwitchNavigator, TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { logout } from "./redux/actions/login";
import { KeyFob, Login, Manual } from "./components";

const Tabs = {
  screen: TabNavigator({
    KeyFob: {
      screen: KeyFob,
    },
    Manual: {
      screen: Manual,
    },
  })
};

const Navigator = SwitchNavigator({
  Login: { screen: Login },
  Main: {
    screen: StackNavigator({
      Tab: Tabs
    }, {
      navigationOptions: ({ navigation }) => ({
        headerRight: <Text
          onPress={() => {
            store.dispatch(logout());
            navigation.navigate('Login')
          }}
          style={styles.logout}>LOGOUT</Text>
      })
    })
  }
});

const styles = StyleSheet.create({
  logout: {
    marginRight: 10,
    fontWeight: 'bold',
  },
});

export default Navigator;
