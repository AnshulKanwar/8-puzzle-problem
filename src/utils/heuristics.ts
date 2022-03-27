import _ from "lodash";
import Puzzle, { Point } from "./8_puzzle_problem";

export const misplacedTiles = (a: Puzzle, b: Puzzle): number => {
  let nTiles = 0;

  for (let x1 = 0; x1 < 3; x1++) {
    for (let y1 = 0; y1 < 3; y1++) {
      const p1: Point = { x: x1, y: y1 };
      const tile = a.state[p1.x][p1.y];

      if (tile === null) {
        continue;
      }

      const p2 = b.find(tile);

      if (p2 === null) {
        nTiles += 1;
      } else {
        if (!_.isEqual(p1, p2)) {
          nTiles += 1;
        }
      }
    }
  }
  return nTiles;
};

export const manhattanDistance = (a: Puzzle, b: Puzzle): number => {
  let distance = 0;

  for (let x1 = 0; x1 < 3; x1++) {
    for (let y1 = 0; y1 < 3; y1++) {
      const p1: Point = { x: x1, y: y1 };
      const tile = a.state[p1.x][p1.y];

      if (tile === null) {
        continue;
      }

      const p2 = b.find(tile);
      distance += Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
    }
  }
  return distance;
};

export const euclideanDistance = (a: Puzzle, b: Puzzle): number => {
  let distance = 0;

  for (let x1 = 0; x1 < 3; x1++) {
    for (let y1 = 0; y1 < 3; y1++) {
      const p1: Point = { x: x1, y: y1 };
      const tile = a.state[p1.x][p1.y];

      if (tile === null) {
        continue;
      }

      const p2 = b.find(tile);
      distance += ((p1.x - p2.x)**2 + (p1.y - p2.y)**2) ** 0.5;
    }
  }
  return distance;
};