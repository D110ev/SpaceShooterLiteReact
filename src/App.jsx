// src/App.jsx
import { useState } from 'react'; // ✅ Correct named import
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';

function App() {
  // ✅ Correct destructuring syntax
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [shipPosition, setShipPosition] = useState(1);

  const moveLeft = () => {
    if (shipPosition > 0) setShipPosition(shipPosition - 1);
  };

  const moveRight = () => {
    if (shipPosition < 2) setShipPosition(shipPosition + 1);
  };

  return (
    <div className="app">
      <Header />
      <ScoreBoard score={score} time={time} />
      <GameBoard shipPosition={shipPosition} />
      <GameOver />
      <Controls moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  );
}

export default App;