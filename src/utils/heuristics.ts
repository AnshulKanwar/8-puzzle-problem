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
