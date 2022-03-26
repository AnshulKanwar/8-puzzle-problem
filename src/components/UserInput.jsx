import Board from "./Board";
import styles from "./UserInput.module.css";

function UserInput({ initialState, setInitialState, goalState, setGoalState }) {
  return (
    <div>
      <div className={styles.container}>
        <h3>Initial State</h3>
        <Board state={initialState}/>
      </div>
      <div className={styles.container}>
        <h3>Goal State</h3>
        <Board state={goalState} />
      </div>
    </div>
  );
}

export default UserInput;
