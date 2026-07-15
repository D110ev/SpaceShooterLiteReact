import Spaceship from "./Spaceship";
import Enemy from "./Enemy";

function GameBoard({ shipPosition }) {
  return (
    <div className="game-board">
      {/* Render Enemy directly. Do not try to map over undefined props. */}
      <Enemy />
      <Spaceship shipPosition={shipPosition} />
    </div>
  );
}

export default GameBoard;