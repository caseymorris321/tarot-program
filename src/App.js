import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TarotCardGenerator from './TarotCardGenerator';

function App() {
  return (
    <Router>
      <div>
        <TarotCardGenerator />
      </div>
    </Router>
  );
}

export default App;
