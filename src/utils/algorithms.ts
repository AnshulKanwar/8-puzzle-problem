import _ from "lodash";
import Puzzle from "./8_puzzle_problem";

type Node = {
  puzzle: Puzzle;
  h: number;
};

export const befs = (
  initial: Puzzle,
  goal: Puzzle,
  h: (a: Puzzle, b: Puzzle) => number
) => {
  let open: Node[] = [{ puzzle: initial, h: h(initial, goal) }];
  let closed: Puzzle[] = [];

  let nextNode: Node;
  while (open.length > 0) {
    nextNode = open.shift();
    closed.push(nextNode.puzzle);

    // Generate Successors
    let successors = [
      nextNode.puzzle.left(),
      nextNode.puzzle.right(),
      nextNode.puzzle.up(),
      nextNode.puzzle.down(),
    ];

    // Remove successors present in closed
    successors = successors.filter((successor) => {
      if (successor == null) {
        return false;
      }

      for (let i = 0; i < closed.length; i++) {
        if (_.isEqual(closed[i], successor)) {
          return false;
        }
      }
      return true;
    });

    for (let i = 0; i < successors.length; i++) {
      if (successors[i] !== null) {
        if (_.isEqual(successors[i], goal)) {
          closed.push(successors[i]);
          return closed;
        }
        open.push({ puzzle: successors[i], h: h(successors[i], goal) });
      }
    }

    open.sort((a, b) => a.h - b.h);
  }
};
