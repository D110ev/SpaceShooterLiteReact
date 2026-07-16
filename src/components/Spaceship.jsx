function Spaceship({shipPosition}){
    const positions=[
        '15%',
        '50%',
        '85%'
    ];
    return(
        <div className="Spaceship" style={{left:positions[shipPosition]}}>
            🚀
        </div>
    );
}
export default Spaceship;