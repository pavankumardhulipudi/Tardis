import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, } from 'react-native';
import { API_URL } from "../../redux/constants";

export default class ManualItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{item.title}</Text>
        <Image style={styles.image}
          source={{ uri: `${API_URL}/manual/${item.image}` }} />
        <Text style={styles.content}>{item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  header: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  content: {
    textAlign: 'justify',
  }
});
