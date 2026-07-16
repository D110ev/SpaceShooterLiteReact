function GameOver({resetGame}){
    return(
        <div className="Game-Over">
            <h2>Game Over</h2>
            <button onClick={resetGame}>Play Again</button>
        </div>
    );
}
export default GameOver;