import WeatherSearch from "./WeatherSearch";
import "./App.css";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <br />
        <WeatherSearch />
      </header>
      <Footer />
    </div>
  );
}

export default App;
