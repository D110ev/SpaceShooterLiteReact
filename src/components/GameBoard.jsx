import Spaceship from "./Spaceship";
import Enemy from "./Enemy";
import Laser from "./Laser";

// ✅ FIX: Add laserY to props
function GameBoard({ shipPosition, enemies, laserVisible, laserY }) {
  return (
    <div className="game-board">
      {enemies.map((enemy) => (
        <Enemy key={enemy.id} lane={enemy.lane} top={enemy.top}/>
      ))}
      {laserVisible && <Laser shipPosition={shipPosition} laserY={laserY} />}

      <Spaceship shipPosition={shipPosition} />
    </div>
  );
}

export default GameBoard;