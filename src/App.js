import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

let interval;
function App() {

  const [timer, updateTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      updateTimer(timer + 1);
    }, 1000);
  }, [timer]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="testing">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{fontSize: "2rem", marginBottom: "5%", backgroundColor: ["red", "blue", "purple", "grey", "pink", "yellow", "green"][Math.max(0, timer % 7)] }}>
        Timer: <span id="timer">{timer}</span> is running!
      </div>
    </div>
  );
}

export default App;
