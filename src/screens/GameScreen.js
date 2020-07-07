import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameField from '../components/GameField';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <GameField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cb7f07',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
