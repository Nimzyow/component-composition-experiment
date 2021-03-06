import './App.css';
import {Cta} from "./components/cta/Cta"

function App() {
  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Cta type={"cancelCta"} />
      <Cta type={"joinCta"}/>
      <Cta type={"subscribeCta"}/>
      <Cta type={"disableCta"}/>
      </div>
    </div>
  );
}

export default App;

