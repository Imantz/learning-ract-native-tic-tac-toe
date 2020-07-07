import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import breakIntoGameBrains, {
  COMPUTER,
  PLAYER,
} from '../components/gameBrains';
import { Foundation } from '@expo/vector-icons';

const Box = ({ icon }) => {
  if (icon === COMPUTER) {
    icon = 'bitcoin-circle';
  } else if (icon === PLAYER) {
    icon = 'x';
  } else {
    icon = null;
  }

  return (
    <View>
      <Text style={styles.box}>
        <Foundation style={styles.icon} name={icon} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#4a9396',
    margin: 3,
    height: 100,
    width: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  icon: {
    color: '#291907',
    fontSize: 60,
  },
});

export default Box;
