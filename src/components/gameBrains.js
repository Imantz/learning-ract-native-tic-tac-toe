//Field will start with 0
//  0 1 2
//  3 4 5
//  6 7 8

const corners = [0, 2, 6, 8];
const center = 4;
var fieldValuesLeft = [];
var player = [];
var computer = [];
export const COMPUTER = 'x';
export const PLAYER = 'o';

export const field = [
  { id: 0, player: '' },
  { id: 1, player: '' },
  { id: 2, player: '' },
  { id: 3, player: '' },
  { id: 4, player: '' },
  { id: 5, player: '' },
  { id: 6, player: '' },
  { id: 7, player: '' },
  { id: 8, player: '' },
];

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Check if any player have win case
export const someoneWin = (playerField) => {
  let win = false;
  winCases.forEach((element) => {
    if (checkEqualItemCount(element, playerField) === 3) {
      return (win = true);
    }
  });
  return win;
};

const nextMoveCanWin = (playerField, field) => {
  // iterate throug all field values.
  // check all field values.
  // if with any field value can win, return field value.
  let victoryMove = null;
  field.forEach((fieldValue) => {
    playerField.push(fieldValue);
    winCases.forEach((element) => {
      if (checkEqualItemCount(element, playerField) === 3) {
        victoryMove = fieldValue;
      }
    });
    playerField.pop();
  });
  return victoryMove;
};

// Check how many equal items contains 2 arrays
// @return count of equal items
export const checkEqualItemCount = (arr1, arr2) => {
  let count = 0;
  arr1.forEach((element) => {
    for (let i = 0; i < arr2.length; i++) {
      if (element === arr2[i]) {
        count++;
      }
    }
  });
  return count;
};

// If any corner is free then
// choose random corner and return.
// @return corner or null
const cornerIsEmpty = async (field) => {
  const cornersAvailable = await corners.filter((el) => field.includes(el));
  const corner =
    cornersAvailable[Math.floor(Math.random() * cornersAvailable.length)];
  return corner > 0 ? corner : null;
};

// for easy check. Push all field values in seperate arrays.
// @param Array with objects. {id: number, player: 'x'||'o'||''}
const fillFieldValuesInArrays = async (field) => {
  //reset
  fieldValuesLeft = [];
  player = [];
  computer = [];
  //fill with values.
  field.forEach((obj) => {
    switch (obj.player) {
      case PLAYER:
        return player.push(obj.id);
        break;
      case COMPUTER:
        return computer.push(obj.id);
        break;
      default:
        return fieldValuesLeft.push(obj.id);
        break;
    }
  });
};

const centerIsEmpty = (field) => {
  return field[center] ?? null;
};

// @params field array with available moves.
// @param player array with player moves.
// @param computer array with computer moves.

const computerBrains = (field, player, computer) => {
  // Check if computer with next move can win.
  // if can win, then return wictory move.
  if (nextMoveCanWin(computer, field)) {
    return nextMoveCanWin(computer, field);
  }

  // Check if player with next move can win.
  // if can win then block his turn.
  if (nextMoveCanWin(player, field)) {
    return nextMoveCanWin(player, field);
  }

  // check if center is empty. Then return center.
  if (centerIsEmpty(field)) {
    return centerIsEmpty(field);
  }

  // check if corner is empty and then return corner
  if (cornerIsEmpty(field)) {
    return cornerIsEmpty();
  }
  return;
};

// Go pokemon, GO!
const breakIntoGameBrains = (state) => {
  fillFieldValuesInArrays(state);
  return computerBrains(fieldValuesLeft, player, computer);
};

export default breakIntoGameBrains;
