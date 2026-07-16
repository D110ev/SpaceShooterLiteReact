// ✅ FIX: Accept laserY in props
function Laser({ shipPosition, laserY }) {
  const positions = ["15%", "50%", "85%"];

  return (
    <div
      className="laser"
      style={{
        left: positions[shipPosition],
        // ✅ FIX: Use lowercase laserY and template literal
        bottom: `${laserY}px` 
      }}
    >
      🔴
    </div>
  );
}

export default Laser;