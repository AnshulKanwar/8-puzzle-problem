import Board from "./Board";
import styles from "./UserInput.module.css";

function UserInput({
  initialState,
  setInitialState,
  goalState,
  setGoalState,
  algorithm,
  setAlgorithm,
  heuristic,
  setHeuristic,
}) {
  return (
    <div>
      <div className={styles.container}>
        <div style={{ marginBottom: "0.5em" }}>
          <label>Algorithm</label>
          <br />
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="breadth-first-search">Breadth First Search</option>
            <option value="best-first-search">Best First Search</option>
            <option value="simple-hill-climbing">Simple Hill Climbing</option>
          </select>
        </div>
        <div>
          <label>Heuristic</label>
          <br />
          <select
            value={heuristic}
            onChange={(e) => setHeuristic(e.target.value)}
          >
            <option value="misplaced-tiles">Misplaced Tiles</option>
            <option value="manhattan-distance">Manhattan Distance</option>
            <option value="euclidean-distance">Euclidean Distance</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Initial State</h3>
        <Board state={initialState} />
      </div>
      <div className={styles.container}>
        <h3>Goal State</h3>
        <Board state={goalState} />
      </div>
    </div>
  );
}

export default UserInput;
