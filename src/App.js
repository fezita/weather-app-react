import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <Weather />
      </header>
      <small>
        <a href="https://github.com/fezita/weather-app-react" target="_blank" rel="noreferrer">Open source code</a>
        ", by"
        <a href="https://www.linkedin.com/in/fernanda-schmitt-b4a3b733/" target="_blank" rel="noreferrer">Fernanda Schmitt</a>
      </small>
    </div>
  );
}

export default App;
