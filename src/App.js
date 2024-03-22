import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Weather city="Moscow" />
        <Weather city="Antalya" />
        <Weather city="Bucharest" />
      </header>
    </div>
  );
}

export default App;
