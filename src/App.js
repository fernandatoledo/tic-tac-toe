import logo from "./logo.svg";
import "./App.css";
import { Game } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to tic tac toe</p>
      </header>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
