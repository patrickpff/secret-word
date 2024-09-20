import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return <div className="start">
        <h1>Secret Word</h1>
        <p>Click at the button bellow to start the game</p>
        <button onClick={startGame}>Press here to start the game</button>
    </div>;
}

export default StartScreen;