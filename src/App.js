import logo from "./logo.svg";
import "./App.css";
import { Board } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to tic tac toe</p>
      </header>
      <div className="game-container">
        <Board />
      </div>
    </div>
  );
}

export default App;
