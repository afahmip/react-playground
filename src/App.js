import React, { useState, useEffect } from 'react';
import { ThreeWrapper } from './components/ThreeWrapper';
import './App.scss';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu([1, 2, 3]);
  }, []);

  return (
    <div className="app">
      <div className="app-content">
        <p>
          "My Neighbor Totoro [Studio Ghibli]" by VanillaBurp, link at: <a href="https://sketchfab.com/3d-models/my-neighbor-totoro-studio-ghibli-ffb11769e03e4a9395416d714ccd66ce" target="_blank" rel="noreferrer noopener">https://sketchfab.com/3d-models/my-neighbor-totoro-studio-ghibli-ffb11769e03e4a9395416d714ccd66ce</a>
          . License at <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/4.0/</a>
        </p>
        <ThreeWrapper />
      </div>
      <div className="app-drawer">
        {menu.map((m, i) => (
          <div className="app-option" key={i}>
            <h1>react-three-fiber</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
