import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App
