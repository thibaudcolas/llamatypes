import logo from "./logo.svg";
// import MinutesRead from "./MinutesRead";
import ReadingTime from "./ReadingTime";
import "./App.css";

const laPluie = `J'viens d'la classe moyenne, moyennement classe
Où tout l'monde cherche une place, Julien Clerc dans l'monospace
J'freestylais dans ma tête sur le bruit des essuie-glaces
Y'a la pluie en featuring dans toutes mes phrases`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <MinutesRead /> */}
        <ReadingTime text={laPluie} />
      </header>
    </div>
  );
}

export default App;
