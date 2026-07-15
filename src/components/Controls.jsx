function Controls({ moveLeft, moveRight }) {
  return (
    <div className="controls">
      <button onClick={moveLeft}>left </button>
      <button>shoot 🔫</button>
      <button onClick={moveRight}>right 👉</button>
    </div>
  );
}

export default Controls;