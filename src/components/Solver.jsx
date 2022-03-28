import { v4 as uuidv4 } from "uuid";

import styles from "./Solver.module.css";
import Puzzle from "../utils/8_puzzle_problem";
import { befs, simpleHillClimbing } from "../utils/algorithms";
import { misplacedTiles, manhattanDistance, euclideanDistance } from "../utils/heuristics";
import Board from "./Board";

function Solver({ initialState, goalState, algorithm, heuristic }) {
  const initial = new Puzzle(initialState);
  const goal = new Puzzle(goalState);

  let algo
  let heur

  switch (algorithm) {
    case 'best-first-search':
      algo = befs
      break;
    case 'simple-hill-climbing':
      algo = simpleHillClimbing
      break;
    default:
      algo = befs
  }

  switch (heuristic) {
    case 'misplaced-tiles':
      heur = misplacedTiles
      break;
    case 'manhattan-distance':
      heur = manhattanDistance
      break;
    case 'euclidean-distance':
      heur = euclideanDistance
      break;
    default:
      heur = misplacedTiles
  }

  const solution = algo(initial, goal, heur);
  console.log(solution);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Solver</h1>
      <h4 style={{ marginBottom: "1em" }}>Solved in {solution.length} steps</h4>
      <div className={styles.solution}>
        {solution.map((board) => (
          <Board key={uuidv4()} state={board.state} />
        ))}
      </div>
    </div>
  );
}

export default Solver;
