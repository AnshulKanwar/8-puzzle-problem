import { v4 as uuidv4 } from "uuid";
import styles from "./Solver.module.css";
import Puzzle from "../utils/8_puzzle_problem";
import { befs } from "../utils/algorithms";
import { misplacedTiles } from "../utils/heuristics";
import Board from "./Board";

function Solver({ initialState, goalState }) {
  const initial = new Puzzle(initialState);
  const goal = new Puzzle(goalState);
  const solution = befs(initial, goal, misplacedTiles);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Solver</h1>
      <div className={styles.solution}>
        {solution.map((board) => (
          <Board key={uuidv4()} state={board.state} />
        ))}
      </div>
    </div>
  );
}

export default Solver;
