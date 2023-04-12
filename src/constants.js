const CANVAS_SIZE = [1520, 700];
const SNAKE_START = [
  [80, 40],
  [80, 41]
];
const APPLE_START = [80, 30];
const SCALE = 10;
const SPEED = 80;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
