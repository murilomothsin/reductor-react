import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Components/Home'
import Hot from './Components/Hot'
import About from './Components/About'

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav className="navbar">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/hot/">Top 100</Link>
          </div>
          <div>
            <Link to="/about/">About</Link>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/hot/" component={Hot} />
        </div>
      </div>
    </Router>
  );
}

export default App;
