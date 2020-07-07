import React, { useState } from 'react';
import breakIntoGameBrains, {
  field,
  PLAYER,
  COMPUTER,
} from '../components/gameBrains';

const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
  const [state, setState] = useState(field);
  const addMove = (id, reset) => {
    if (reset) {
      return setState(field);
    }
    const newState = state.map((item) =>
      item.id === id ? { id, player: PLAYER } : item
    );
    const pcItem = breakIntoGameBrains(newState);
    const pcMove = newState.map((item) =>
      item.id === pcItem ? { id: pcItem, player: COMPUTER } : item
    );
    setState(pcMove);
  };

  return (
    <GameContext.Provider value={{ data: state, addMove }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
