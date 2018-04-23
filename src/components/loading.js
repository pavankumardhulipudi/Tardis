import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large' animating={true} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Loading;
