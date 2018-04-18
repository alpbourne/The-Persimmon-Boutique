import React, { Component } from 'react';
import Home from './Home';
import About from '../components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App
