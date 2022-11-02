const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  // Your code in here ...
  let position = [];
  let x = 0;
  let y = 0
  for (let move of moves) {
    if (move == "north") {
      y = y + 1;
    }
    if (move == "west") {
      x = x - 1;
    }
    if (move == "south") {
      y = y - 1;
    }
    if (move == "east") {
      x = x + 1;
    }
  }
  position = [x,y];
  return position;
}

console.log(finalPosition(moves));