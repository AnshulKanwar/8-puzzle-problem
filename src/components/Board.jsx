import styles from "./Board.module.css";

function Board({ state }) {
  return (
    <div className={styles.board}>
      {state.map((row) =>
        row.map((tile) => <div draggable key={tile} className={styles.tile}>{tile}</div>)
      )}
    </div>
  );
}

export default Board;
