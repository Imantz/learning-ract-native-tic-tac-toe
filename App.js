import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { GameProvider } from './src/context/GameContext';
import IndexScreen from './src/screens/IndexScreen';
import GameScreen from './src/screens/GameScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Tic-Tac-Toe',
      headerStyle: {
        backgroundColor: '#cb7f07',
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <GameProvider>
      <App />
    </GameProvider>
  );
};
