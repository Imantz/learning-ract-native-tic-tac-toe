import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Box from '../components/Box';

const GameField = (props) => {
  const { data, addMove } = useContext(GameContext);
  const box = (id, player) => {
    return (
      <TouchableOpacity onPress={() => (player === '' ? addMove(id) : '')}>
        <Box icon={player} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={(box) => box.id}
        renderItem={({ item }) => {
          return box(item.id, item.player);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          addMove(null, 'justPlaceholderToReset');
        }}
      >
        <Text style={styles.btn}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    maxWidth: 400,
    marginTop: 120,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    backgroundColor: 'teal',
    marginBottom: 40,
    padding: 20,
    width: 200,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
});

export default GameField;
