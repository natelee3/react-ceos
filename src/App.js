import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CeoList from './components/CeoList';

function App() {
  
  return (
    <div className="App">
      <Router >
        <CeoList/>
      </Router>
    </div>
  );
}

export default App;