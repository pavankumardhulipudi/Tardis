/**
 * @flow
 */

import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { login } from "../../redux/reducers/auth";
import tardisImage from './img/tardis.png';
import Loading from "../loading";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.token) {
      nextProps.navigation.navigate('Main');
    }
  }

  render() {
    let { auth, login } = this.props;
    let { username, password } = this.state;

    if(auth.isFetching) {
      return (<Loading />);
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={tardisImage} />
        <View style={styles.rowContainer}>
          <TextInput
            autoCapitalize={'none'}
            style={styles.textField}
            value={username}
            placeholder={'username'}
            onChangeText={(text) => {
              this.setState({ username: text })
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            autoCapitalize={'none'}
            secureTextEntry={true}
            style={styles.textField}
            value={password}
            placeholder={'password'}
            onChangeText={(text) => {
              this.setState({ password: text })
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => login(username, password)}
            disabled={false}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  disabledSubmit: {
    alignItems: 'center',
    backgroundColor: '#b9ccee',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
  },
  image: {
    height: 240,
    marginBottom: 44,
    marginTop: 60,
    resizeMode: Image.resizeMode.contain,
    width: 240,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#5e81bc',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
  },
  text: {
    color: '#fff'
  },
  textField: {
    borderColor: '#000',
    borderWidth: 0.5,
    flex: 1,
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
    padding: 10,
  },
});

export default Login;
