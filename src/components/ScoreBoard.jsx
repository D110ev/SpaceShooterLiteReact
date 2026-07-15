function ScoreBoard({ score, time }) {
  return (
    <div className="score-board">
      <div>
        <h2>Score</h2>
        <h1>{score}</h1>
      </div>
      <div>
        <h2>Time: {time}</h2>
        <h1>{time}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;