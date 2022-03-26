var _ = require("lodash");

export type Point = {
  x: number;
  y: number;
};

export default class Puzzle {
  state: (number | null)[][];
  empty: Point = { x: -1, y: -1 };

  constructor(state: (number | null)[][]) {
    this.state = state;
    this.updateEmpty();

    if (_.isEqual(this.empty, { x: -1, y: -1 })) {
      throw new Error("No empty tile found");
    }
  }

  up(inplace: boolean = false): Puzzle | null {
    let puzzle: Puzzle;
    if (inplace) {
      puzzle = this;
    } else {
      puzzle = _.cloneDeep(this);
    }

    const { x, y } = this.empty;

    if (x === 0) {
      return null;
    }

    puzzle.state[x][y] = puzzle.state[x - 1][y];
    puzzle.state[x - 1][y] = null;

    puzzle.updateEmpty();

    return puzzle;
  }

  down(inplace: boolean = false): Puzzle | null {
    let puzzle: Puzzle;
    if (inplace) {
      puzzle = this;
    } else {
      puzzle = _.cloneDeep(this);
    }

    const { x, y } = this.empty;

    if (x === 2) {
      return null;
    }

    puzzle.state[x][y] = puzzle.state[x + 1][y];
    puzzle.state[x + 1][y] = null;

    puzzle.updateEmpty();

    return puzzle;
  }

  left(inplace: boolean = false): Puzzle | null {
    let puzzle: Puzzle;
    if (inplace) {
      puzzle = this;
    } else {
      puzzle = _.cloneDeep(this);
    }

    const { x, y } = this.empty;

    if (y === 0) {
      return null;
    }

    puzzle.state[x][y] = puzzle.state[x][y - 1];
    puzzle.state[x][y - 1] = null;

    puzzle.updateEmpty();

    return puzzle;
  }

  right(inplace: boolean = false): Puzzle | null {
    let puzzle: Puzzle;
    if (inplace) {
      puzzle = this;
    } else {
      puzzle = _.cloneDeep(this);
    }

    const { x, y } = this.empty;

    if (x === 2) {
      return null;
    }

    puzzle.state[x][y] = puzzle.state[x][y + 1];
    puzzle.state[x][y + 1] = null;

    puzzle.updateEmpty();

    return puzzle;
  }

  find(tile: number): Point | null {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.state[x][y] === tile) {
          return { x, y };
        }
      }
    }

    return null;
  }

  private updateEmpty() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.state[i][j] === null) {
          this.empty = { x: i, y: j };
          return;
        }
      }
    }
  }
}
