function Enemy({lane}) {
    const positions=['15%','50%','85%'];
  return (
    <div className="enemy"
    style={{left:positions[lane]}}>
        🦠
    </div>
  );
}

export default Enemy;