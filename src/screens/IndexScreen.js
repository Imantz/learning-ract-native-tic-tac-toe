import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text style={styles.button}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#cb7f07',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4a9396',
    fontSize: 25,
    color: 'white',
    padding: 10,
    width: 200,
    textAlign: 'center',
    borderRadius: 20,
  },
});

export default IndexScreen;
