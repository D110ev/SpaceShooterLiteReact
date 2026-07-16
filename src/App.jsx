import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';

function App() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [shipPosition, setShipPosition] = useState(1);
  
  // Laser State
  const [laserVisible, setLaserVisible] = useState(false);
  const [laserY, setLaserY] = useState(20);

  const [enemies, setEnemies] = useState([
    { id: 1, lane: 0, top: 40 },
    { id: 2, lane: 1, top: 40 },
    { id: 3, lane: 2, top: 40 },
  ]);

  const moveLeft = () => {
    if (shipPosition > 0) setShipPosition(shipPosition - 1);
  };

  const moveRight = () => {
    if (shipPosition < 2) setShipPosition(shipPosition + 1);
  };

  const shoot = () => {
    if (laserVisible) return;
    setLaserVisible(true);
    setLaserY(20);
  };

  const gameOver = time == 0;

  const restartGame = () => {
    setScore(0);
    setTime(60);
    setLaserVisible(false);
    setLaserY(100);
    setShipPosition(1);
    setEnemies([
      { id: 1, lane: 0, top: 40 },
      { id: 2, lane: 1, top: 40 },
      { id: 3, lane: 2, top: 40 },
    ]);
  }

  // Move laser up
  useEffect(() => {
    if (!laserVisible) return;
    const interval = setInterval(() => {
      setLaserY((prev) => prev - 10);
    }, 40);
    return () => clearInterval(interval);
  }, [laserVisible]);

  // Reset laser when off screen
  useEffect(() => {
    if (laserY > 400) {
      setLaserVisible(false);
      setLaserY(20);
    }
  }, [laserY]);

  // ✅ FIX 1: Added 'prev' parameter and dependency array
  useEffect(() => {
    const interval = setInterval(() => {
      setEnemies((prev) => prev.map((enemy) => ({
        ...enemy,
        top: enemy.top > 420 ? 40 : enemy.top + 5,
        lane: enemy.top > 420 
          ? Math.floor(Math.random() * 3) 
          : enemy.lane
      })))
    }, 40);
    return () => clearInterval(interval);
  }, []);  // ✅ FIX 2: Added empty dependency array

  // ✅ FIX 3: Corrected timer syntax
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);  // ✅ Moved 1000 to correct position
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!laserVisible) {
      return;
    }
    enemies.forEach((enemy) => {
      const enemyBottom = enemy.top + 40;
      if (enemy.lane === shipPosition && laserY > enemy.top && laserY < enemyBottom) {
        setScore(prev => prev + 1);
        setLaserVisible(false);
        setLaserY(100);
        setEnemies((prev) => prev.map(
          e => e.id === enemy.id ? {
            ...e,
            top: 40,
            lane: Math.floor(Math.random() * 3)
          } : e
        ));
      }
    });
  }, [laserY, enemies]);

  return (
    <div className="app">
      <Header />
      <ScoreBoard score={score} time={time} />
      
      <GameBoard
        shipPosition={shipPosition}
        enemies={enemies}
        laserVisible={laserVisible}
        laserY={laserY}
      />
      {gameOver &&
        <GameOver 
          restartGame={restartGame}
        />
      }

      {!gameOver &&
        <Controls
          moveLeft={moveLeft}
          moveRight={moveRight}
          shoot={shoot}
        />
      }
    </div>
  );
}

export default App;