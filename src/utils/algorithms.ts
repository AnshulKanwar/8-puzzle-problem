import _ from "lodash";
import Puzzle from "./8_puzzle_problem";

export const bfs = (
  initial: Puzzle,
  goal: Puzzle,
  h: (a: Puzzle, b: Puzzle) => number
) => {
  let open = [initial];
  let closed: Puzzle[] = [];

  let currentNode;
  while (open.length > 0) {
    currentNode = open.shift();
    closed.push(currentNode);

    // Generate Successors
    let successors = [
      currentNode.left(),
      currentNode.right(),
      currentNode.up(),
      currentNode.down(),
    ];

    // Remove successors present in closed or that are null
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
      if (_.isEqual(successors[i], goal)) {
        closed.push(successors[i]);
        return closed;
      }
      open.push(successors[i]);
    }
  }
};

export const befs = (
  initial: Puzzle,
  goal: Puzzle,
  h: (a: Puzzle, b: Puzzle) => number
) => {
  let open = [{ puzzle: initial, h: h(initial, goal) }];
  let closed: Puzzle[] = [];

  let currentNode;
  while (open.length > 0) {
    currentNode = open.shift();
    closed.push(currentNode.puzzle);

    // Generate Successors
    let successors = [
      currentNode.puzzle.left(),
      currentNode.puzzle.right(),
      currentNode.puzzle.up(),
      currentNode.puzzle.down(),
    ];

    // Remove successors present in closed or that are null
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
      if (_.isEqual(successors[i], goal)) {
        closed.push(successors[i]);
        return closed;
      }
      open.push({ puzzle: successors[i], h: h(successors[i], goal) });
    }

    open.sort((a, b) => a.h - b.h);
  }
};

export const simpleHillClimbing = (
  initial: Puzzle,
  goal: Puzzle,
  h: (a: Puzzle, b: Puzzle) => number
) => {
  let open = initial;
  let closed: Puzzle[] = [];

  let currentNode;
  while (true) {
    currentNode = open;
    closed.push(currentNode);

    // Generate Successors
    let successors = [
      currentNode.left(),
      currentNode.right(),
      currentNode.up(),
      currentNode.down(),
    ];

    // Remove successors present in closed or that are null
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
      if (_.isEqual(successors[i], goal)) {
        closed.push(successors[i]);
        return closed;
      } else if (h(successors[i], goal) < h(currentNode, goal)) {
        open = successors[i];
        break;
      }
    }
  }
};
