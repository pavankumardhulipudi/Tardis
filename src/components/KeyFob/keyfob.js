/**
 * @flow
 */

import React, { Component } from 'react';
import { Text, Animated, Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from "react-redux";
import Loading from '../loading';
import { LOCK, UNLOCK } from '../../redux/constants';
import lockImage from './img/lock.png';
import unlockImage from './img/unlock.png';

class KeyFob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isKeyFobLocked: true,
      animateLock: false,
      animateUnlock: false,
    };

    this.intervalId = null;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.keyFob.status !== this.props.keyFob.status) {
      clearInterval(this.intervalId);
      this.setState({
        isKeyFobLocked: nextProps.keyFob.status === LOCK,
        animateLock: false,
        animateUnlock: false,
      });
    }
  }

  toggleKeyFob(status) {
    this.props.toggleKeyFob(status);
    this.setState({
      animateLock: status == LOCK,
      animateUnlock: status == UNLOCK,
    });
    this.intervalId = setInterval(() => this.props.getKeyFobStatus(status), 500);
  }


  render() {
    const { isKeyFobLocked, animateLock, animateUnlock } = this.state;
    const { keyFob } = this.props;
    const textMessage = isKeyFobLocked ? 'Locked' : 'Unlocked';

    if(keyFob.isFetching) {
      return (<Loading />);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>KeyFob Status: {textMessage}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.toggleKeyFob(LOCK)}
          disabled={isKeyFobLocked}
          underlayColor={'#b9ccee'}>
          <Animated.Image style={[isKeyFobLocked ? styles.disabledImage : styles.image, this.animateLock ? 'test' : '']} source={lockImage} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.toggleKeyFob(UNLOCK)}
          disabled={!isKeyFobLocked}
          underlayColor={'#b9ccee'}>
          <Animated.Image style={[!isKeyFobLocked ? styles.disabledImage : styles.image, this.animateUnlock ? 'test' : '']} source={unlockImage} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 4,
    borderColor: '#27467f',
    borderRadius: 100,
    height: 100,
    width: 100,
    padding: 8,
    margin: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5Fcff',
  },
  image: {
    tintColor: '#5e81bc',
  },
  disabledImage: {
    tintColor: 'green',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default KeyFob;
