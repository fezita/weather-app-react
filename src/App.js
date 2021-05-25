import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Weather />
      <footer>
        This project was coded by {""}
        <a href="https://www.linkedin.com/in/fernanda-schmitt-b4a3b733/" target="_blank" rel="noreferrer">Fernanda Schmitt</a>
       {""} and is open-sourced on <a href="https://github.com/fezita/weather-app-react" target="_blank" rel="noreferrer">Github </a>
      </footer>
      </div>
    </div>
  );
}


