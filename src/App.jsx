import { useState } from "react";
import style from "./App.module.css";
import Solver from "./components/Solver";
import UserInput from "./components/UserInput";

function App() {
  const [initialState, setInitialState] = useState([
    [2, null, 3],
    [1, 8, 4],
    [7, 6, 5],
  ]);
  const [goalState, setGoalState] = useState([
    [1, 2, 3],
    [8, null, 4],
    [7, 6, 5],
  ]);

  return (
    <div className={style.App}>
      <h1 className={style.header}>8 Puzzle Problem Solver</h1>
      <div className={style.container}>
        <UserInput
          initialState={initialState}
          setInitialState={setInitialState}
          goalState={goalState}
          setGoalState={setGoalState}
        />
        <Solver initialState={initialState} goalState={goalState} />
      </div>
    </div>
  );
}

export default App;
