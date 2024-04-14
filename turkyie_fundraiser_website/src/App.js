
import './App.css';

import Title from "./components/Title/Title.js";
import Values from "./components/Values/Values.js";
import Graph from "./components/Graph/Graph.js";

function App() {
  return (
    <div className="App">
      <Title/>
      <section>
        <Values/>
        <Graph/>
      </section>
    </div>
  );
}

export default App;
 