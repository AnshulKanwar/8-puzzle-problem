import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Solver.module.css";
import Puzzle from "../utils/8_puzzle_problem";
import { bfs, befs, simpleHillClimbing } from "../utils/algorithms";
import {
  misplacedTiles,
  manhattanDistance,
  euclideanDistance,
} from "../utils/heuristics";
import Board from "./Board";

function Solver({ initialState, goalState, algorithm, heuristic }) {
  const [loading, setLoading] = useState(true);
  const [solution, setSolution] = useState(null);

  let algo;
  let heur;

  switch (algorithm) {
    case "breadth-first-search":
      algo = bfs;
      break;
    case "best-first-search":
      algo = befs;
      break;
    case "simple-hill-climbing":
      algo = simpleHillClimbing;
      break;
    default:
      algo = bfs;
  }

  switch (heuristic) {
    case "misplaced-tiles":
      heur = misplacedTiles;
      break;
    case "manhattan-distance":
      heur = manhattanDistance;
      break;
    case "euclidean-distance":
      heur = euclideanDistance;
      break;
    default:
      heur = misplacedTiles;
  }

  useEffect(() => {
    const initial = new Puzzle(initialState);
    const goal = new Puzzle(goalState);

    setSolution(algo(initial, goal, heur));
    console.log("loading is true")
    setLoading(false);
  }, [algo, heur, initialState, goalState]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Solver</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!solution ? (
            <div>
              <h4>Stuck in Blind Alley</h4>
            </div>
          ) : (
            <>
              <h4 style={{ marginBottom: "1em" }}>
                Solved in {solution.length} steps
              </h4>
              <div className={styles.solution}>
                {solution.map((board) => (
                  <Board key={uuidv4()} state={board.state} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Solver;
