import React from 'react';
import { ThreeWrapper } from './components/ThreeWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="three">
        <ThreeWrapper />
      </div>
      <p>
        "My Neighbor Totoro [Studio Ghibli]" by VanillaBurp, link at: <a href="https://sketchfab.com/3d-models/my-neighbor-totoro-studio-ghibli-ffb11769e03e4a9395416d714ccd66ce" target="_blank" rel="noreferrer noopener">https://sketchfab.com/3d-models/my-neighbor-totoro-studio-ghibli-ffb11769e03e4a9395416d714ccd66ce</a>
        . License at <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/4.0/</a>
      </p>
    </div>
  );
}

export default App;
